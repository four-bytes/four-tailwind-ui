<script setup lang="ts">
import { computed, useSlots } from "vue";
import Card from "./Card.vue";
import { cn } from "../../utils/cn";
import { colorMap, resolveAdaptiveColor } from "../../utils/colors";
import type {
  TailwindColor,
  GaugeThreshold,
  GaugeDetail,
} from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Label displayed above the gauge */
    label: string;
    /** Current value (null shows '--') */
    value: number | null;
    /** Maximum value (determines 100%) */
    max: number;
    /** Unit displayed next to value */
    unit: string;
    /** Optional subtitle below the gauge */
    subtitle?: string;
    /** Base color (used when percentage is above all thresholds) */
    color?: TailwindColor;
    /** Adaptive color thresholds. Default: [{at: 15, color: 'red'}, {at: 30, color: 'amber'}] */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Key-value detail rows below the gauge */
    details?: GaugeDetail[];
    /** Locale for number formatting (default: 'de-DE') */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {
    color: "sky",
    adaptive: true,
    locale: "de-DE",
    thresholds: () => [
      { at: 15, color: "red" as TailwindColor },
      { at: 30, color: "amber" as TailwindColor },
    ],
  },
);

const slots = useSlots();
const hasDetails = computed(
  () => (props.details && props.details.length > 0) || !!slots.details,
);

const percent = computed(() => {
  if (props.value === null || props.max <= 0) return 0;
  return Math.min(100, Math.max(0, (props.value / props.max) * 100));
});

const displayValue = computed(() => {
  if (props.value === null) return "--";
  return props.value.toLocaleString(props.locale);
});

const activeColor = computed(() => {
  if (!props.adaptive) return props.color;
  return resolveAdaptiveColor(percent.value, props.color, props.thresholds);
});

const colors = computed(() => colorMap[activeColor.value]);

const radius = 70;
const stroke = 10;
const circumference = Math.PI * radius;
const dashOffset = computed(
  () => circumference - (percent.value / 100) * circumference,
);
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
    <div class="p-4 flex flex-col items-center">
      <!-- Label -->
      <span
        class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2"
      >
        {{ label }}
      </span>

      <!-- Gauge SVG -->
      <div class="relative w-40 h-24">
        <svg viewBox="0 0 160 90" class="w-full h-full">
          <path
            d="M 10 80 A 70 70 0 0 1 150 80"
            fill="none"
            :class="cn(colors.trackLight, colors.trackDark)"
            :stroke-width="stroke"
            stroke-linecap="round"
          />
          <path
            d="M 10 80 A 70 70 0 0 1 150 80"
            fill="none"
            :class="cn(colors.bar, 'transition-all duration-700 ease-out')"
            :stroke-width="stroke"
            stroke-linecap="round"
            :stroke-dasharray="circumference"
            :stroke-dashoffset="dashOffset"
          />
        </svg>
        <div
          class="absolute inset-0 flex flex-col items-center justify-end pb-0"
        >
          <div class="flex items-baseline gap-0.5">
            <span
              :class="
                cn(
                  'text-2xl font-bold tabular-nums',
                  colors.textLight,
                  colors.textDark,
                )
              "
            >
              {{ displayValue }}
            </span>
            <span class="text-xs text-gray-400 dark:text-gray-500">{{
              unit
            }}</span>
          </div>
        </div>
      </div>

      <!-- Subtitle -->
      <span
        v-if="subtitle"
        class="text-xs text-gray-400 dark:text-gray-500 mt-1"
      >
        {{ subtitle }}
      </span>
    </div>

    <!-- Detail rows below the gauge -->
    <div v-if="hasDetails" class="px-4 pb-4">
      <div
        class="border-t border-gray-200 dark:border-gray-800 pt-3 space-y-1.5"
      >
        <slot name="details">
          <div
            v-for="(row, i) in details"
            :key="i"
            class="flex items-center justify-between"
          >
            <span class="text-[11px] text-gray-400 dark:text-gray-500">{{
              row.label
            }}</span>
            <span
              class="text-[11px] font-medium tabular-nums text-gray-700 dark:text-gray-300"
            >
              {{ row.value }}
            </span>
          </div>
        </slot>
      </div>
    </div>
  </Card>
</template>
