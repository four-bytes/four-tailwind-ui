<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useSidebarProvider } from "../../composables/useSidebar";

const props = withDefaults(
  defineProps<{
    /** Initial expanded state */
    initialExpanded?: boolean;
    /** Breakpoint for mobile detection in pixels */
    mobileBreakpoint?: number;
  }>(),
  {
    initialExpanded: true,
    mobileBreakpoint: 1024,
  },
);

useSidebarProvider({
  initialExpanded: props.initialExpanded,
  mobileBreakpoint: props.mobileBreakpoint,
});
</script>
