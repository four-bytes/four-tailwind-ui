<template>
  <div
    :class="
      cn(
        'flex items-start gap-3 rounded-lg border p-4 shadow-lg',
        variantClasses[type],
      )
    "
    role="alert"
  >
    <!-- Icon -->
    <div class="flex-shrink-0">
      <component :is="icons[type]" class="h-5 w-5" />
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0">
      <p class="text-sm font-medium">{{ title }}</p>
      <p v-if="message" class="mt-1 text-sm opacity-90">{{ message }}</p>
    </div>

    <!-- Close Button -->
    <button
      v-if="dismissible"
      type="button"
      class="flex-shrink-0 rounded-md p-1 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
      @click="$emit('dismiss')"
    >
      <svg
        class="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { h, type FunctionalComponent } from "vue";
import type { ToastType } from "../../composables/useToast";
import { cn } from "../../utils/cn";

defineProps<{
  type: ToastType;
  title: string;
  message?: string;
  dismissible?: boolean;
}>();

defineEmits<{
  dismiss: [];
}>();

const variantClasses: Record<ToastType, string> = {
  success:
    "bg-success-50 border-success-200 text-success-800 dark:bg-success-900/30 dark:border-success-800 dark:text-success-200",
  error:
    "bg-error-50 border-error-200 text-error-800 dark:bg-error-900/30 dark:border-error-800 dark:text-error-200",
  warning:
    "bg-warning-50 border-warning-200 text-warning-800 dark:bg-warning-900/30 dark:border-warning-800 dark:text-warning-200",
  info: "bg-blue-light-50 border-blue-light-200 text-blue-light-800 dark:bg-blue-light-900/30 dark:border-blue-light-800 dark:text-blue-light-200",
};

// Simple inline SVG icons
const SuccessIconSvg: FunctionalComponent = () =>
  h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M5 13l4 4L19 7",
    }),
  ]);

const ErrorIconSvg: FunctionalComponent = () =>
  h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 18L18 6M6 6l12 12",
    }),
  ]);

const WarningIconSvg: FunctionalComponent = () =>
  h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
    }),
  ]);

const InfoIconSvg: FunctionalComponent = () =>
  h("svg", { fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" }, [
    h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    }),
  ]);

const icons: Record<ToastType, FunctionalComponent> = {
  success: SuccessIconSvg,
  error: ErrorIconSvg,
  warning: WarningIconSvg,
  info: InfoIconSvg,
};
</script>
