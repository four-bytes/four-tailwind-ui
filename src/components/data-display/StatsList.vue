<script setup lang="ts">
import Card from "./Card.vue";
import { colorMap } from "../../utils/colors";
import type { StatsRow } from "../../utils/colors";

const props = withDefaults(
  defineProps<{
    /** Array of metric rows to display */
    rows: StatsRow[];
    /** Additional CSS classes for the Card wrapper */
    class?: string;
  }>(),
  {},
);

function formatValue(row: StatsRow): string {
  if (row.value === null) return "--";
  const decimals = row.decimals ?? 1;
  const val = (
    Math.round(row.value * Math.pow(10, decimals)) / Math.pow(10, decimals)
  ).toFixed(decimals);
  return row.unit ? `${val} ${row.unit}` : val;
}

function getPercent(row: StatsRow): number {
  if (row.value === null) return 0;
  const max = row.max ?? 100;
  return Math.min(100, Math.max(0, (row.value / max) * 100));
}

function getColors(row: StatsRow) {
  return colorMap[row.color ?? "sky"];
}
</script>

<template>
  <Card :class="props.class" content-class="!space-y-4 !p-5">
    <!-- Metric rows -->
    <div v-for="(row, i) in rows" :key="i">
      <div class="flex items-center justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-400">{{
          row.label
        }}</span>
        <span
          :class="`text-sm font-medium tabular-nums ${getColors(row).textLight} ${getColors(row).textDark}`"
        >
          {{ formatValue(row) }}
        </span>
      </div>
      <div
        class="mt-1.5 w-full h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden"
      >
        <div
          :class="`h-full rounded-full ${getColors(row).barSolid} transition-all duration-700`"
          :style="{ width: `${getPercent(row)}%` }"
        />
      </div>
    </div>

    <!-- Footer slot for additional content (e.g., extra stats, counters) -->
    <div
      v-if="$slots.footer"
      class="pt-2 border-t border-gray-200 dark:border-gray-800"
    >
      <slot name="footer" />
    </div>
  </Card>
</template>
