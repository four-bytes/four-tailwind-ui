<template>
  <div class="flex items-start gap-3">
    <div class="flex items-center h-5">
      <input
        :id="checkboxId"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLInputElement).checked)"
        :disabled="disabled"
        class="h-5 w-5 rounded border-gray-300 text-brand-500 focus:ring-brand-500 dark:border-gray-700 dark:bg-gray-900 dark:focus:ring-brand-600 disabled:opacity-50"
      />
    </div>
    <div class="flex flex-col">
      <label
        v-if="label"
        :for="checkboxId"
        class="text-sm font-medium text-gray-700 dark:text-gray-300"
        :class="{ 'text-gray-400 dark:text-gray-600': disabled }"
      >
        {{ label }}
      </label>
      <p v-if="description" class="text-xs text-gray-500 dark:text-gray-400">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
  label?: string
  description?: string
  disabled?: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const checkboxId = computed(() => `checkbox-${Math.random().toString(36).substr(2, 9)}`)
</script>
