<template>
  <div :class="cn('mb-6', props.class)">
    <div
      v-if="title && (isExpanded || isMobileOpen || isHovered)"
      class="mb-1 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500"
    >
      {{ title }}
    </div>
    <ul class="flex flex-col gap-0.5">
      <slot />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { cn } from "../../utils/cn";
import { useSidebar } from "../../composables/useSidebar";

interface SidebarGroupProps {
  /** Group heading — hidden when sidebar is collapsed */
  title?: string;
  /** Additional classes */
  class?: string;
}

const props = defineProps<SidebarGroupProps>();

defineOptions({ inheritAttrs: false });

const { isExpanded, isMobileOpen, isHovered } = useSidebar();
</script>
