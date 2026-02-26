<template>
  <div
    :class="
      cn(
        'flex-1 transition-all duration-300 ease-in-out',
        isExpanded || isHovered ? 'lg:ml-[290px]' : 'lg:ml-[90px]',
      )
    "
  >
    <slot name="header" />
    <div class="p-4 mx-auto max-w-screen-2xl md:p-6">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSidebar } from "../../composables/useSidebar";
import { cn } from "../../utils/cn";

const { isExpanded, isHovered } = useSidebar();
</script>
