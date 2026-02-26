<template>
  <div :class="cn('relative', props.class)" ref="dropdownRef">
    <!-- Dropdown Trigger -->
    <button
      type="button"
      @click="toggleDropdown"
      :aria-expanded="isOpen"
      aria-haspopup="menu"
      :class="cn(buttonClass)"
    >
      <slot name="trigger">
        <!-- Default: Three dots icon -->
        <svg
          class="fill-current"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.99902 10.245C6.96552 10.245 7.74902 11.0285 7.74902 11.995V12.005C7.74902 12.9715 6.96552 13.755 5.99902 13.755C5.03253 13.755 4.24902 12.9715 4.24902 12.005V11.995C4.24902 11.0285 5.03253 10.245 5.99902 10.245ZM17.999 10.245C18.9655 10.245 19.749 11.0285 19.749 11.995V12.005C19.749 12.9715 18.9655 13.755 17.999 13.755C17.0325 13.755 16.249 12.9715 16.249 12.005V11.995C16.249 11.0285 17.0325 10.245 17.999 10.245ZM13.749 11.995C13.749 11.0285 12.9655 10.245 11.999 10.245C11.0325 10.245 10.249 11.0285 10.249 11.995V12.005C10.249 12.9715 11.0325 13.755 11.999 13.755C12.9655 13.755 13.749 12.9715 13.749 12.005V11.995Z"
            fill="currentColor"
          />
        </svg>
      </slot>
    </button>

    <!-- Dropdown Menu -->
    <Transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isOpen" role="menu" :class="cn(menuClass)">
        <slot name="menu" :close="closeDropdown">
          <!-- Default menu items from props -->
          <template v-for="(item, index) in items" :key="index">
            <button
              type="button"
              @click="handleItemClick(item)"
              role="menuitem"
              :class="cn(itemClass)"
            >
              <component v-if="item.icon" :is="item.icon" class="w-4 h-4" />
              {{ item.label }}
            </button>
          </template>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useClickOutside } from "../../composables/useClickOutside";
import { cn } from "../../utils/cn";

defineOptions({ inheritAttrs: false });

export interface DropdownMenuItem {
  /** Display label */
  label: string;
  /** Icon component (optional) */
  icon?: object;
  /** Click handler */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
}

interface DropdownMenuProps {
  /** Menu items (alternative to using the menu slot) */
  items?: DropdownMenuItem[];
  /** CSS class for the trigger button */
  buttonClass?: string;
  /** CSS class for the dropdown menu */
  menuClass?: string;
  /** CSS class for menu items */
  itemClass?: string;
  /** Position of the dropdown */
  position?: "left" | "right";
  /** Additional CSS classes for the outer wrapper */
  class?: string;
}

const props = withDefaults(defineProps<DropdownMenuProps>(), {
  items: () => [],
  buttonClass:
    "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300",
  menuClass:
    "absolute right-0 z-40 w-40 p-2 space-y-1 bg-white border border-gray-200 top-full mt-1 rounded-2xl shadow-lg dark:border-gray-800 dark:bg-gray-900",
  itemClass:
    "flex w-full items-center gap-2 px-3 py-2 font-medium text-left text-gray-500 rounded-lg text-sm hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-white/5 dark:hover:text-gray-300",
  position: "right",
});

const emit = defineEmits<{
  select: [item: DropdownMenuItem];
}>();

const isOpen = ref(false);
const dropdownRef = ref<HTMLElement | null>(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = () => {
  isOpen.value = false;
};

const handleItemClick = (item: DropdownMenuItem) => {
  if (item.disabled) return;

  if (item.onClick) {
    item.onClick();
  }

  emit("select", item);
  closeDropdown();
};

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape" && isOpen.value) {
    closeDropdown();
  }
};

onMounted(() => document.addEventListener("keydown", handleKeydown));
onUnmounted(() => document.removeEventListener("keydown", handleKeydown));

useClickOutside(dropdownRef, closeDropdown);
</script>
