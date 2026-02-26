<template>
  <!-- router-link variant -->
  <router-link v-if="to" :to="to" :class="itemClasses" @click="handleClick">
    <span :class="iconClasses">
      <component v-if="icon" :is="icon" class="w-6 h-6" />
    </span>
    <span
      v-if="isExpanded || isMobileOpen || isHovered"
      class="flex items-center gap-2"
    >
      {{ label }}
      <span
        v-if="badge"
        class="ml-auto inline-flex items-center justify-center rounded-full bg-brand-500 px-1.5 py-0.5 text-[10px] font-semibold text-white"
      >
        {{ badge }}
      </span>
    </span>
  </router-link>

  <!-- button variant -->
  <button v-else type="button" :class="itemClasses" @click="handleClick">
    <span :class="iconClasses">
      <component v-if="icon" :is="icon" class="w-6 h-6" />
    </span>
    <span
      v-if="isExpanded || isMobileOpen || isHovered"
      class="flex items-center gap-2"
    >
      {{ label }}
      <span
        v-if="badge"
        class="ml-auto inline-flex items-center justify-center rounded-full bg-brand-500 px-1.5 py-0.5 text-[10px] font-semibold text-white"
      >
        {{ badge }}
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { useRoute } from "vue-router";
import { cn } from "../../utils/cn";
import { useSidebar } from "../../composables/useSidebar";

export interface SidebarItemProps {
  /** Navigation target — renders as router-link when set */
  to?: string;
  /** Icon component */
  icon?: Component;
  /** Display label */
  label: string;
  /** Force active state (auto-detected from route when `to` is set) */
  active?: boolean;
  /** Badge text or count shown on the right */
  badge?: string | number;
  /** Additional classes for the root element */
  class?: string;
}

const props = defineProps<SidebarItemProps>();

defineOptions({ inheritAttrs: false });

const { isExpanded, isMobileOpen, isHovered, setActiveItem } = useSidebar();

// Try to detect active state from route
let route: ReturnType<typeof useRoute> | null = null;
try {
  route = useRoute();
} catch {
  // No Vue Router installed
}

const isActive = computed(() => {
  if (props.active !== undefined) return props.active;
  if (route && props.to)
    return route.path === props.to || route.path.startsWith(props.to + "/");
  return false;
});

const itemClasses = computed(() =>
  cn(
    "group relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm transition-colors duration-150",
    isActive.value
      ? "bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400"
      : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300",
    !isExpanded.value &&
      !isMobileOpen.value &&
      !isHovered.value &&
      "lg:justify-center",
    props.class,
  ),
);

const iconClasses = computed(() =>
  cn(
    "flex shrink-0 items-center justify-center w-6 h-6",
    isActive.value
      ? "text-brand-500 dark:text-brand-400"
      : "text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300",
  ),
);

const handleClick = () => {
  if (props.to) setActiveItem(props.to);
  else if (props.label) setActiveItem(props.label);
};
</script>
