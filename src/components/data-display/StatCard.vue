<script setup lang="ts">
import { computed } from "vue";
import Card from "./Card.vue";
import { cn } from "../../utils/cn";
import { colorMap } from "../../utils/colors";
import type { TailwindColor } from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Label displayed in the header */
    label: string;
    /** Metric value (string or number, null shows '--') */
    value: string | number | null;
    /** Unit displayed after the value */
    unit?: string;
    /** Color theme */
    color?: TailwindColor;
    /** Subtitle text below the value */
    subtitle?: string;
    /** Custom subtitle color class (overrides default gray) */
    subtitleColor?: string;
    /** Show animated pulse indicator (e.g., for active/live state) */
    pulse?: boolean;
    /** Use absolute value for display (useful for bidirectional metrics) */
    absolute?: boolean;
    /** Locale for number formatting */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {
    color: "sky",
    absolute: false,
    locale: "de-DE",
  },
);

const colors = computed(() => colorMap[props.color]);

const displayValue = computed(() => {
  if (props.value === null || props.value === undefined) return "--";
  if (typeof props.value === "string") return props.value;
  const v = props.absolute ? Math.abs(props.value) : props.value;
  return Math.round(v).toLocaleString(props.locale);
});
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
    <div class="p-4">
      <div class="flex items-center gap-2 mb-3">
        <div
          :class="
            cn(
              'w-8 h-8 rounded-lg flex items-center justify-center',
              colors.iconBg,
              colors.iconBgDark,
            )
          "
        >
          <slot name="icon" />
        </div>
        <span
          class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
        >
          {{ label }}
        </span>
        <div
          v-if="pulse"
          :class="
            cn(
              'w-1.5 h-1.5 rounded-full animate-pulse ml-auto',
              colors.barSolid,
            )
          "
        />
      </div>
      <div class="flex items-baseline gap-1">
        <span
          :class="
            cn(
              'text-3xl font-bold tabular-nums',
              colors.textLight,
              colors.textDark,
            )
          "
        >
          {{ displayValue }}
        </span>
        <span v-if="unit" class="text-sm text-gray-400 dark:text-gray-500">{{
          unit
        }}</span>
      </div>
      <div
        v-if="subtitle"
        :class="
          cn(
            'text-xs mt-1',
            subtitleColor || 'text-gray-400 dark:text-gray-500',
          )
        "
      >
        {{ subtitle }}
      </div>
    </div>
  </Card>
</template>
