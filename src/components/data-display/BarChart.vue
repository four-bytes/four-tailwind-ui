<script setup lang="ts">
import { computed, useSlots } from "vue";
import Card from "./Card.vue";
import { cn } from "../../utils/cn";
import { colorMap } from "../../utils/colors";
import type { TailwindColor, BarChartItem } from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Data points for the bars */
    items: BarChartItem[];
    /** Chart color theme */
    color?: TailwindColor;
    /** Chart height in pixels (default: 140) */
    height?: number;
    /** Show value labels above bars (default: true) */
    showValues?: boolean;
    /** Format function for value labels. Default: auto-format large numbers */
    formatValue?: (value: number) => string;
    /** Minimum bar height in percent (default: 4) to keep zero-values visible */
    minBarPercent?: number;
    /** Show group boundaries (vertical line when group changes) */
    showGroupBoundary?: boolean;
    /** Label for empty state */
    emptyLabel?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {
    color: "sky",
    height: 140,
    showValues: true,
    minBarPercent: 4,
    showGroupBoundary: true,
    emptyLabel: "Keine Daten verfügbar",
  },
);

const slots = useSlots();

const colors = computed(() => colorMap[props.color]);

const maxValue = computed(() => {
  if (props.items.length === 0) return 1;
  return Math.max(...props.items.map((b) => b.value), 1);
});

function defaultFormatValue(value: number): string {
  if (value > 999) return (value / 1000).toFixed(1);
  return String(value);
}

function formatVal(value: number): string {
  if (props.formatValue) return props.formatValue(value);
  return defaultFormatValue(value);
}

function barHeight(value: number): string {
  if (value <= 0) return "0%";
  return `${Math.max(props.minBarPercent, (value / maxValue.value) * 100)}%`;
}

/** Gibt die CSS-Farbe für die gewählte Farbe zurück (Tailwind v4 color-mix) */
function barColor(opacity: number): string {
  return `color-mix(in srgb, var(--color-${props.color}-500) ${opacity}%, transparent)`;
}

/** Find indices where group changes (for boundary lines) */
const groupBoundaryIndices = computed(() => {
  if (!props.showGroupBoundary) return new Set<number>();
  const indices = new Set<number>();
  for (let i = 1; i < props.items.length; i++) {
    if (
      props.items[i].group !== undefined &&
      props.items[i - 1].group !== undefined &&
      props.items[i].group !== props.items[i - 1].group
    ) {
      indices.add(i);
    }
  }
  return indices;
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
    <div class="p-5">
      <!-- Header slot -->
      <div v-if="slots.header" class="flex items-center justify-between mb-4">
        <slot name="header" />
      </div>

      <!-- Bar chart -->
      <div
        v-if="items.length > 0"
        class="flex items-end gap-1"
        :style="{ height: `${height}px` }"
      >
        <div
          v-for="(bar, i) in items"
          :key="i"
          class="flex-1 flex flex-col items-center h-full"
          :class="
            cn(
              groupBoundaryIndices.has(i)
                ? 'border-l border-gray-300 dark:border-gray-700 pl-0.5'
                : '',
            )
          "
        >
          <!-- Value label above bar -->
          <span
            v-if="showValues && bar.value > 0"
            class="text-[9px] tabular-nums text-gray-400 dark:text-gray-500 leading-none mb-1 shrink-0"
          >
            {{ formatVal(bar.value) }}
          </span>
          <!-- Bar container -->
          <div class="w-full flex-1 relative">
            <div
              class="absolute bottom-0 left-0.5 right-0.5 rounded-t transition-all duration-500"
              :style="{
                height: barHeight(bar.value),
                backgroundColor: bar.highlighted
                  ? barColor(100)
                  : bar.group === items[items.length - 1]?.group
                    ? barColor(50)
                    : barColor(25),
              }"
            />
          </div>
          <!-- Label -->
          <span
            class="text-[9px] leading-none mt-1.5 shrink-0"
            :style="{
              color: bar.highlighted
                ? `var(--color-${props.color}-500)`
                : undefined,
              fontWeight: bar.highlighted ? '500' : undefined,
              opacity:
                bar.group !== items[items.length - 1]?.group && !bar.highlighted
                  ? '0.4'
                  : undefined,
            }"
          >
            {{ bar.label }}
          </span>
        </div>
      </div>
      <div
        v-else
        class="text-xs text-gray-400 dark:text-gray-600 text-center py-8"
      >
        {{ emptyLabel }}
      </div>
    </div>
  </Card>
</template>
