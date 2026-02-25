<template>
  <aside
    :class="[
      'fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 dark:text-gray-100 h-screen transition-all duration-300 ease-in-out z-[9999] border-r border-gray-200',
      {
        'lg:w-[290px]': isExpanded || isMobileOpen || isHovered,
        'lg:w-[90px]': !isExpanded && !isHovered,
        'translate-x-0 w-[290px]': isMobileOpen,
        '-translate-x-full': !isMobileOpen,
        'lg:translate-x-0': true,
      },
    ]"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <!-- Logo Slot -->
    <div
      :class="[
        'py-8 flex',
        !isExpanded && !isHovered ? 'lg:justify-center' : 'justify-start',
      ]"
    >
      <slot
        name="logo"
        :is-expanded="isExpanded"
        :is-hovered="isHovered"
        :is-mobile-open="isMobileOpen"
      >
        <!-- Default: No logo -->
      </slot>
    </div>

    <!-- Navigation Content -->
    <div
      class="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar flex-1"
    >
      <nav class="mb-6">
        <slot
          :is-expanded="isExpanded"
          :is-hovered="isHovered"
          :is-mobile-open="isMobileOpen"
          :is-collapsed="!isExpanded && !isHovered && !isMobileOpen"
        >
          <!-- Default: Empty navigation, implement your own menu -->
        </slot>
      </nav>

      <!-- Footer Widget Slot -->
      <div v-if="isExpanded || isHovered || isMobileOpen" class="mt-auto">
        <slot
          name="footer"
          :is-expanded="isExpanded"
          :is-hovered="isHovered"
          :is-mobile-open="isMobileOpen"
        >
          <!-- Default: No footer widget -->
        </slot>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { watch } from "vue";
import { useRoute } from "vue-router";
import { useSidebar } from "../../composables/useSidebar";

const props = withDefaults(
  defineProps<{
    /** Enable hover expansion when collapsed */
    hoverExpand?: boolean;
    /** Close mobile sidebar on route change (default: true) */
    closeOnNavigate?: boolean;
  }>(),
  {
    hoverExpand: true,
    closeOnNavigate: true,
  },
);

const {
  isExpanded,
  isMobileOpen,
  isHovered,
  setIsHovered,
  closeMobileSidebar,
} = useSidebar();

// Auf Mobile: Sidebar schließen wenn zu einer neuen Route navigiert wird
// useRoute() optional — kein Crash wenn kein Vue Router registriert
let route: ReturnType<typeof useRoute> | null = null;
try {
  route = useRoute();
} catch {
  // Kein Vue Router registriert — closeOnNavigate deaktiviert
}

if (route) {
  watch(
    () => route!.path,
    () => {
      if (props.closeOnNavigate) {
        closeMobileSidebar();
      }
    },
  );
}

const handleMouseEnter = () => {
  if (props.hoverExpand && !isExpanded.value) {
    setIsHovered(true);
  }
};

const handleMouseLeave = () => {
  setIsHovered(false);
};
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
