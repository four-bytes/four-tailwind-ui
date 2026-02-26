<script setup lang="ts">
import { computed } from "vue";
import Card from "./Card.vue";
import { cn } from "../../utils/cn";
import { colorMap, resolveAdaptiveColor } from "../../utils/colors";
import type { TailwindColor, GaugeThreshold } from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Label displayed above the bar */
    label: string;
    /** Current value (0-max, null shows '--') */
    value: number | null;
    /** Maximum value (default: 100) */
    max?: number;
    /** Unit displayed after value (default: '%') */
    unit?: string;
    /** Base color */
    color?: TailwindColor;
    /** Adaptive color thresholds */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Show scale markers below the bar (default: true) */
    showScale?: boolean;
    /** Number of scale divisions (default: 4, showing 5 markers) */
    scaleDivisions?: number;
    /** Show percentage inside the bar (default: true) */
    showInnerLabel?: boolean;
    /** Bar height class (default: 'h-5') */
    barHeight?: string;
    /** Wrap in a Card component (default: true) */
    wrapped?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {
    max: 100,
    unit: "%",
    color: "emerald",
    adaptive: true,
    showScale: true,
    scaleDivisions: 4,
    showInnerLabel: true,
    barHeight: "h-5",
    wrapped: true,
    thresholds: () => [
      { at: 15, color: "red" as TailwindColor },
      { at: 30, color: "amber" as TailwindColor },
    ],
  },
);

const percent = computed(() => {
  if (props.value === null || props.max <= 0) return 0;
  return Math.min(100, Math.max(0, (props.value / props.max) * 100));
});

const roundedValue = computed(() => Math.round(props.value ?? 0));

const activeColor = computed(() => {
  if (!props.adaptive) return props.color;
  return resolveAdaptiveColor(percent.value, props.color, props.thresholds);
});

const colors = computed(() => colorMap[activeColor.value]);

const scaleMarkers = computed(() => {
  const markers: number[] = [];
  for (let i = 0; i <= props.scaleDivisions; i++) {
    markers.push(Math.round((props.max / props.scaleDivisions) * i));
  }
  return markers;
});
</script>

<template>
  <component
    :is="wrapped ? Card : 'div'"
    :class="props.class"
    content-class="!space-y-3"
  >
    <template v-if="wrapped" #header>
      <div class="flex items-center justify-between px-5 pt-5">
        <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{
          label
        }}</span>
        <div class="flex items-baseline gap-1">
          <span
            :class="
              cn(
                'text-2xl font-bold tabular-nums',
                colors.textLight,
                colors.textDark,
              )
            "
          >
            {{ value !== null ? roundedValue : "--" }}
          </span>
          <span class="text-sm text-gray-400 dark:text-gray-500">{{
            unit
          }}</span>
        </div>
      </div>
    </template>

    <!-- Unwrapped header -->
    <div v-if="!wrapped" class="flex items-center justify-between mb-2">
      <span class="text-sm font-medium text-gray-500 dark:text-gray-400">{{
        label
      }}</span>
      <div class="flex items-baseline gap-1">
        <span
          :class="
            cn(
              'text-lg font-bold tabular-nums',
              colors.textLight,
              colors.textDark,
            )
          "
        >
          {{ value !== null ? roundedValue : "--" }}
        </span>
        <span class="text-xs text-gray-400 dark:text-gray-500">{{ unit }}</span>
      </div>
    </div>

    <div :class="wrapped ? 'px-5 pb-5' : ''">
      <div
        :class="
          cn(
            'relative w-full bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden',
            barHeight,
          )
        "
      >
        <div
          :class="
            cn(
              'absolute inset-y-0 left-0 rounded-full bg-gradient-to-r transition-all duration-700 ease-out',
              colors.barGradient,
            )
          "
          :style="{ width: `${percent}%` }"
        />
        <div
          v-if="showInnerLabel"
          class="absolute inset-0 flex items-center justify-center"
        >
          <span class="text-xs font-semibold text-white mix-blend-difference">
            {{ roundedValue }} {{ unit }}
          </span>
        </div>
      </div>
      <div
        v-if="showScale"
        class="flex justify-between mt-1.5 text-xs text-gray-400 dark:text-gray-600"
      >
        <span v-for="marker in scaleMarkers" :key="marker"
          >{{ marker }}{{ unit }}</span
        >
      </div>
    </div>
  </component>
</template>
