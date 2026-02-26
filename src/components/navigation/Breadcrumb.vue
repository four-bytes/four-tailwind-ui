<template>
  <div
    :class="
      cn('flex flex-wrap items-center justify-between gap-3 mb-6', props.class)
    "
  >
    <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90">
      {{ pageTitle }}
    </h2>
    <nav aria-label="Breadcrumb">
      <ol class="flex items-center gap-1.5">
        <li
          v-for="(item, index) in items"
          :key="index"
          class="flex items-center gap-1.5"
        >
          <!-- Link item -->
          <component
            v-if="item.href && index < items.length - 1"
            :is="linkComponent"
            :href="item.href"
            :to="item.to"
            class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {{ item.label }}
          </component>
          <!-- Current/last item (not a link) -->
          <span
            v-else
            :class="
              cn(
                'text-sm',
                index === items.length - 1
                  ? 'text-gray-800 dark:text-white/90'
                  : 'text-gray-500 dark:text-gray-400',
              )
            "
          >
            {{ item.label }}
          </span>
          <!-- Separator -->
          <svg
            v-if="index < items.length - 1"
            class="stroke-current text-gray-400"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
              stroke="currentColor"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { cn } from "../../utils/cn";

defineOptions({ inheritAttrs: false });

export interface BreadcrumbItem {
  /** Display label */
  label: string;
  /** URL for native anchor links */
  href?: string;
  /** Route object for vue-router */
  to?: string | object;
}

interface BreadcrumbProps {
  /** Page title displayed on the left */
  pageTitle: string;
  /** Breadcrumb items (last item is current page, not clickable) */
  items?: BreadcrumbItem[];
  /** Component to use for links (default: 'a', use 'router-link' for vue-router) */
  linkComponent?: string | object;
  /** Additional CSS classes for the outer wrapper */
  class?: string;
}

const props = withDefaults(defineProps<BreadcrumbProps>(), {
  items: () => [],
  linkComponent: "a",
});
</script>
