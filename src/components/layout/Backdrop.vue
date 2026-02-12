<template>
  <Transition
    enter-active-class="transition-opacity duration-200"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-200"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMobileOpen"
      class="fixed inset-0 bg-gray-900/50 z-[9998] lg:hidden"
      @click="toggleMobileSidebar"
    ></div>
  </Transition>
</template>

<script setup lang="ts">
import { useSidebar } from '../../composables/useSidebar'

const { toggleMobileSidebar, isMobileOpen } = useSidebar()
</script>
