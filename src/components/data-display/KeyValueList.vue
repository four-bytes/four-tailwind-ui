<script setup lang="ts">
import { computed, useSlots } from "vue";
import Card from "./Card.vue";
import { cn } from "../../utils/cn";
import { colorMap } from "../../utils/colors";
import type { TailwindColor, KeyValueRow } from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Key-value rows to display */
    rows: KeyValueRow[];
    /** Accent color for highlighted values */
    color?: TailwindColor;
    /** Show separator lines between rows (default: true) */
    showSeparators?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {
    color: "sky",
    showSeparators: true,
  },
);

const slots = useSlots();
const colors = computed(() => colorMap[props.color]);
</script>

<template>
  <Card
    :class="
      cn(
        'group transition-colors bg-gradient-to-br to-transparent',
        colors.gradient,
        colors.hoverBorder,
        props.class,
      )
    "
    content-class="!p-0"
  >
    <div class="p-5">
      <!-- Header slot -->
      <div v-if="slots.header" class="flex items-center justify-between mb-4">
        <slot name="header" />
      </div>

      <!-- Key-value rows -->
      <div class="space-y-2">
        <div
          v-for="(row, i) in rows"
          :key="i"
          class="flex items-center justify-between py-1"
          :class="
            cn(
              showSeparators && i < rows.length - 1
                ? 'border-b border-gray-100 dark:border-gray-800/50'
                : '',
            )
          "
        >
          <span class="text-xs text-gray-400 dark:text-gray-500">{{
            row.label
          }}</span>
          <span
            :class="
              cn(
                'text-sm font-medium tabular-nums',
                row.accent
                  ? `${colors.textLight} ${colors.textDark}`
                  : 'text-gray-700 dark:text-gray-300',
              )
            "
          >
            {{ row.value }}
          </span>
        </div>
      </div>

      <!-- Footer slot -->
      <div
        v-if="slots.footer"
        class="mt-4 pt-3 border-t border-gray-200 dark:border-gray-800"
      >
        <slot name="footer" />
      </div>
    </div>
  </Card>
</template>
