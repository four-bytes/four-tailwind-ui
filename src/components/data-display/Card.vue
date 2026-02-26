<template>
  <div
    :class="
      cn(
        'rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]',
        props.class,
      )
    "
  >
    <!-- Card Header -->
    <div v-if="title || $slots.header" class="px-6 py-5">
      <slot name="header">
        <h3 class="text-base font-medium text-gray-800 dark:text-white/90">
          {{ title }}
        </h3>
        <p
          v-if="description"
          class="mt-1 text-sm text-gray-500 dark:text-gray-400"
        >
          {{ description }}
        </p>
      </slot>
    </div>

    <!-- Card Body -->
    <div
      :class="
        cn(
          'p-4 sm:p-6',
          (title || $slots.header) &&
            'border-t border-gray-100 dark:border-gray-800',
        )
      "
    >
      <div :class="contentClass">
        <slot></slot>
      </div>
    </div>

    <!-- Card Footer -->
    <div
      v-if="$slots.footer"
      class="px-6 py-4 border-t border-gray-100 dark:border-gray-800"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "../../utils/cn";

defineOptions({ inheritAttrs: false });

interface CardProps {
  /** Card title */
  title?: string;
  /** Card description */
  description?: string;
  /** Additional CSS classes for the card */
  class?: string;
  /** CSS classes for the content wrapper */
  contentClass?: string;
}

const props = withDefaults(defineProps<CardProps>(), {
  contentClass: "space-y-5",
});
</script>
