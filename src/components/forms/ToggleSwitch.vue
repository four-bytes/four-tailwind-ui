<template>
  <label
    :class="
      cn(
        'relative inline-flex items-center cursor-pointer',
        disabled && 'opacity-50 cursor-not-allowed',
        props.class,
      )
    "
  >
    <input
      type="checkbox"
      :checked="modelValue"
      @change="
        !disabled &&
        $emit('update:modelValue', ($event.target as HTMLInputElement).checked)
      "
      :disabled="disabled"
      class="sr-only peer"
    />
    <div
      class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-brand-300 dark:peer-focus:ring-brand-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-brand-500"
    ></div>
    <span
      v-if="label"
      class="ms-3 text-sm font-medium text-gray-700 dark:text-gray-300"
    >
      {{ label }}
    </span>
  </label>
</template>

<script setup lang="ts">
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    label?: string;
    disabled?: boolean;
    class?: string;
  }>(),
  {
    class: "",
  },
);

defineOptions({ inheritAttrs: false });

defineEmits<{
  "update:modelValue": [value: boolean];
}>();
</script>
