<template>
  <div>
    <label
      v-if="label"
      :for="inputId"
      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
      :class="{ 'text-gray-300 dark:text-white/15': disabled }"
    >
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <div class="flex">
      <!-- Prefix -->
      <span
        v-if="$slots.prefix || prefix"
        class="inline-flex items-center rounded-l-lg border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
      >
        <slot name="prefix">{{ prefix }}</slot>
      </span>
      
      <!-- Input -->
      <input
        :id="inputId"
        :type="type"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :placeholder="placeholder"
        :required="required"
        :disabled="disabled"
        :class="[
          'h-11 w-full border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800',
          inputClasses,
          error ? 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800' : '',
          { 'disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500': disabled }
        ]"
      />
      
      <!-- Suffix -->
      <span
        v-if="$slots.suffix || suffix"
        class="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
      >
        <slot name="suffix">{{ suffix }}</slot>
      </span>
    </div>
    <p v-if="error" class="mt-1.5 text-xs text-error-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  modelValue: string | number
  type?: string
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  prefix?: string
  suffix?: string
}>(), {
  type: 'text',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const slots = defineSlots<{
  prefix?: () => unknown
  suffix?: () => unknown
}>()

const inputId = computed(() => `input-group-${Math.random().toString(36).substr(2, 9)}`)

const inputClasses = computed(() => {
  const hasPrefix = !!props.prefix || !!slots.prefix
  const hasSuffix = !!props.suffix || !!slots.suffix
  
  if (hasPrefix && hasSuffix) {
    return 'rounded-none'
  } else if (hasPrefix) {
    return 'rounded-l-none rounded-r-lg'
  } else if (hasSuffix) {
    return 'rounded-l-lg rounded-r-none'
  }
  return 'rounded-lg'
})
</script>
