<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 flex items-center justify-center overflow-y-auto z-[99999]"
      >
        <!-- Backdrop -->
        <div
          :class="cn(backdropClasses)"
          aria-hidden="true"
          @click="handleClose"
        ></div>

        <!-- Content -->
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="modelValue"
            role="dialog"
            aria-modal="true"
            tabindex="-1"
            :class="cn('relative z-10 outline-none', sizeClass, props.class)"
          >
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, watch, nextTick, onMounted, onUnmounted } from "vue";
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    size?: "sm" | "md" | "lg" | "xl" | "full";
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    blur?: boolean;
    class?: string;
  }>(),
  {
    modelValue: true,
    size: "md",
    closeOnBackdrop: true,
    closeOnEscape: true,
    blur: true,
    class: "",
  },
);

defineOptions({ inheritAttrs: false });

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  close: [];
}>();

const sizeClass = computed(() => {
  const sizes = {
    sm: "max-w-sm w-full",
    md: "max-w-lg w-full",
    lg: "max-w-2xl w-full",
    xl: "max-w-4xl w-full",
    full: "max-w-full w-full mx-4",
  };
  return sizes[props.size];
});

const backdropClasses = computed(() => {
  const base = "fixed inset-0 h-full w-full";
  const blurClass = props.blur ? "backdrop-blur-[32px]" : "";
  // Dark overlay for both modes - ensures dialog is clearly visible
  const colorClass = "bg-black/60 dark:bg-black/70";
  return `${base} ${blurClass} ${colorClass}`;
});

// Handle close - emit both events for flexibility
const handleClose = () => {
  if (!props.closeOnBackdrop) return;
  emit("update:modelValue", false);
  emit("close");
};

// Handle escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === "Escape" && props.closeOnEscape && props.modelValue) {
    emit("update:modelValue", false);
    emit("close");
  }
};

// Lock body scroll when modal is open
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Move focus into modal on next tick
      nextTick(() => {
        const modal = document.querySelector(
          '[role="dialog"]',
        ) as HTMLElement | null;
        modal?.focus();
      });
    } else {
      document.body.style.overflow = "";
    }
  },
);

onMounted(() => {
  document.addEventListener("keydown", handleEscape);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleEscape);
  document.body.style.overflow = "";
});
</script>
