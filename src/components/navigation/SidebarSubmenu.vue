<template>
  <div :class="cn(props.class)">
    <!-- Parent trigger -->
    <button
      type="button"
      :class="
        cn(
          'group relative flex items-center w-full gap-3 px-3 py-2 font-medium rounded-lg text-theme-sm transition-colors duration-150',
          isOpen
            ? 'bg-brand-50 text-brand-500 dark:bg-brand-500/[0.12] dark:text-brand-400'
            : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/5 dark:hover:text-gray-300',
          !isExpanded && !isMobileOpen && !isHovered && 'lg:justify-center',
        )
      "
      @click="toggle"
    >
      <span
        :class="
          cn(
            'flex shrink-0 items-center justify-center w-6 h-6',
            isOpen
              ? 'text-brand-500 dark:text-brand-400'
              : 'text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300',
          )
        "
      >
        <component v-if="icon" :is="icon" class="w-6 h-6" />
      </span>

      <span
        v-if="isExpanded || isMobileOpen || isHovered"
        class="flex flex-1 items-center justify-between"
      >
        <span>{{ label }}</span>
        <!-- Chevron -->
        <svg
          :class="
            cn(
              'w-4 h-4 transition-transform duration-200',
              isOpen ? 'rotate-180' : '',
            )
          "
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </button>

    <!-- Submenu items -->
    <div
      v-if="isOpen && (isExpanded || isMobileOpen || isHovered)"
      class="mt-0.5 ml-9 flex flex-col gap-0.5"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, type Component } from "vue";
import { cn } from "../../utils/cn";
import { useSidebar } from "../../composables/useSidebar";

interface SidebarSubmenuProps {
  /** Parent item label */
  label: string;
  /** Parent item icon */
  icon?: Component;
  /** Unique name for open/close tracking */
  name: string;
  /** Additional classes */
  class?: string;
}

const props = defineProps<SidebarSubmenuProps>();

defineOptions({ inheritAttrs: false });

const { isExpanded, isMobileOpen, isHovered, openSubmenu, toggleSubmenu } =
  useSidebar();

const isOpen = computed(() => openSubmenu.value === props.name);

const toggle = () => toggleSubmenu(props.name);
</script>
