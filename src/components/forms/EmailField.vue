<template>
  <div :class="cn(props.class)">
    <label
      v-if="label"
      :for="inputId"
      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
      :class="cn(disabled && 'text-gray-300 dark:text-white/15')"
    >
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <div class="relative">
      <span
        class="absolute left-0 top-1/2 -translate-y-1/2 border-r border-gray-200 px-3.5 py-3 text-gray-500 dark:border-gray-800 dark:text-gray-400"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.04175 7.06206V14.375C3.04175 14.6511 3.26561 14.875 3.54175 14.875H16.4584C16.7346 14.875 16.9584 14.6511 16.9584 14.375V7.06245L11.1443 11.1168C10.457 11.5961 9.54373 11.5961 8.85638 11.1168L3.04175 7.06206ZM16.9584 5.19262C16.9584 5.19341 16.9584 5.1942 16.9584 5.19498V5.20026C16.9572 5.22216 16.946 5.24239 16.9279 5.25501L10.2864 9.88638C10.1145 10.0062 9.8862 10.0062 9.71437 9.88638L3.07255 5.25485C3.05342 5.24151 3.04202 5.21967 3.04202 5.19636C3.042 5.15695 3.07394 5.125 3.11335 5.125H16.8871C16.9253 5.125 16.9564 5.15494 16.9584 5.19262ZM18.4584 5.21428V14.375C18.4584 15.4796 17.563 16.375 16.4584 16.375H3.54175C2.43718 16.375 1.54175 15.4796 1.54175 14.375V5.19498C1.54175 5.1852 1.54194 5.17546 1.54231 5.16577C1.55858 4.31209 2.25571 3.625 3.11335 3.625H16.8871C17.7549 3.625 18.4584 4.32843 18.4585 5.19622C18.4585 5.20225 18.4585 5.20826 18.4584 5.21428Z"
            fill="currentColor"
          />
        </svg>
      </span>
      <input
        :id="inputId"
        type="email"
        :value="modelValue"
        @input="onInput"
        @blur="validate"
        :placeholder="placeholder || 'email@example.com'"
        :required="required"
        :disabled="disabled"
        :class="
          cn(
            'h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 pl-[62px] text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500',
            validationError &&
              'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800',
          )
        "
      />
    </div>
    <p v-if="validationError" class="mt-1.5 text-xs text-error-500">
      {{ validationError }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, useId } from "vue";
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    errorMessages?: {
      required?: string;
      invalid?: string;
    };
    class?: string;
  }>(),
  {
    errorMessages: () => ({
      required: "Email is required",
      invalid: "Please enter a valid email address",
    }),
    class: "",
  },
);

defineOptions({ inheritAttrs: false });

const emit = defineEmits<{
  "update:modelValue": [value: string];
  validation: [valid: boolean];
}>();

const inputId = useId();
const touched = ref(false);
const internalError = ref("");

// Email regex pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validationError = computed(() => {
  // External error takes precedence
  if (props.error) return props.error;
  // Only show internal error after field has been touched
  if (touched.value && internalError.value) return internalError.value;
  return "";
});

function validateEmail(email: string): boolean {
  if (!email && props.required) {
    internalError.value = props.errorMessages?.required || "Email is required";
    return false;
  }
  if (email && !emailPattern.test(email)) {
    internalError.value =
      props.errorMessages?.invalid || "Please enter a valid email address";
    return false;
  }
  internalError.value = "";
  return true;
}

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);

  // Clear error while typing if email becomes valid
  if (touched.value && emailPattern.test(value)) {
    internalError.value = "";
    emit("validation", true);
  }
}

function validate() {
  touched.value = true;
  const isValid = validateEmail(props.modelValue);
  emit("validation", isValid);
}

// Watch for external changes
watch(
  () => props.modelValue,
  (newValue) => {
    if (touched.value) {
      const isValid = validateEmail(newValue);
      emit("validation", isValid);
    }
  },
);
</script>
