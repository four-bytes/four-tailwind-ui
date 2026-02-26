<template>
  <div :class="cn(props.class)">
    <label
      v-if="label"
      :for="textareaId"
      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
      :class="cn(disabled && 'text-gray-300 dark:text-white/15')"
    >
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <textarea
      :id="textareaId"
      :value="modelValue"
      @input="
        $emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)
      "
      :placeholder="placeholder"
      :required="required"
      :disabled="disabled"
      :rows="rows"
      :class="
        cn(
          'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:placeholder:text-gray-300 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:placeholder:text-white/15',
          error &&
            'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800',
        )
      "
    ></textarea>
    <p v-if="error" class="mt-1.5 text-xs text-error-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { useId } from "vue";
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue: string;
    label?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    error?: string;
    rows?: number;
    class?: string;
  }>(),
  {
    rows: 4,
    class: "",
  },
);

defineOptions({ inheritAttrs: false });

defineEmits<{
  "update:modelValue": [value: string];
}>();

const textareaId = useId();
</script>
