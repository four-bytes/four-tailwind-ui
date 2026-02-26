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
      <input
        :id="inputId"
        type="time"
        :value="modelValue"
        @input="
          $emit('update:modelValue', ($event.target as HTMLInputElement).value)
        "
        :required="required"
        :disabled="disabled"
        :class="
          cn(
            'h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500',
            error &&
              'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800',
          )
        "
      />
      <span
        class="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 dark:text-gray-400"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3334 10C18.3334 14.6 14.6001 18.3333 10.0001 18.3333C5.40008 18.3333 1.66675 14.6 1.66675 10C1.66675 5.4 5.40008 1.66667 10.0001 1.66667C14.6001 1.66667 18.3334 5.4 18.3334 10Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.0917 12.65L10.5084 11.1083C10.0584 10.8417 9.69175 10.2 9.69175 9.67501V6.25833"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <p v-if="error" class="mt-1.5 text-xs text-error-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useId } from "vue";
import { cn } from "../../utils/cn";

const props = defineProps<{
  modelValue: string;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  class?: string;
}>();

defineOptions({ inheritAttrs: false });

defineEmits<{
  "update:modelValue": [value: string];
}>();

const inputId = useId();
</script>
