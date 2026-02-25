<template>
  <div>
    <label
      v-if="label"
      :for="selectId"
      class="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-400"
      :class="{ 'text-gray-300 dark:text-white/15': disabled }"
    >
      {{ label }}
      <span v-if="required" class="text-error-500">*</span>
    </label>
    <div class="relative z-20 bg-transparent">
      <select
        :id="selectId"
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        :required="required"
        :disabled="disabled"
        :class="[
          'w-full appearance-none rounded-lg border border-gray-300 bg-white bg-none pr-10 text-gray-800 shadow-theme-xs placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30 dark:focus:border-brand-800 disabled:border-gray-100 disabled:bg-gray-50 disabled:text-gray-400 dark:disabled:border-gray-800 dark:disabled:bg-white/[0.03] dark:disabled:text-gray-500',
          sizeClasses[size],
          error ? 'border-error-300 focus:border-error-300 focus:ring-error-500/10 dark:border-error-700 dark:focus:border-error-800' : '',
          modelValue ? 'text-gray-800 dark:text-white/90' : ''
        ]"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
          class="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
        >
          {{ option.label }}
        </option>
      </select>
      <span class="absolute z-30 text-gray-700 -translate-y-1/2 pointer-events-none right-3 top-1/2 dark:text-gray-400">
        <svg class="stroke-current" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.79175 7.396L10.0001 12.6043L15.2084 7.396" stroke="" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
    </div>
    <p v-if="error" class="mt-1.5 text-xs text-error-500">{{ error }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { SelectOption } from '../../types'

interface SelectFieldProps {
  modelValue: string | number | null
  options: SelectOption[]
  label?: string
  placeholder?: string
  required?: boolean
  disabled?: boolean
  error?: string
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<SelectFieldProps>(), {
  size: 'md',
})

defineEmits<{
  'update:modelValue': [value: string]
}>()

const selectId = computed(() => `select-${Math.random().toString(36).substr(2, 9)}`)

// Match Button sizes exactly
const sizeClasses = {
  sm: 'px-3 py-2 text-sm',      // Same as Button sm
  md: 'px-4 py-2.5 text-sm',    // Same as Button md
  lg: 'px-5 py-3 text-base',    // Same as Button lg
}
</script>
