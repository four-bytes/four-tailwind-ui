<template>
  <Teleport to="body">
    <div
      :class="
        cn('fixed z-[99999] flex flex-col gap-2 p-4', positionClasses[position])
      "
    >
      <TransitionGroup
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="transform translate-x-full opacity-0"
        enter-to-class="transform translate-x-0 opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="transform translate-x-0 opacity-100"
        leave-to-class="transform translate-x-full opacity-0"
        move-class="transition duration-300 ease-out"
      >
        <Toast
          v-for="toast in toasts"
          :key="toast.id"
          :type="toast.type"
          :title="toast.title"
          :message="toast.message"
          :dismissible="true"
          @dismiss="remove(toast.id)"
        />
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { useToast } from "../../composables/useToast";
import { cn } from "../../utils/cn";
import Toast from "./Toast.vue";

withDefaults(
  defineProps<{
    position?:
      | "top-right"
      | "top-left"
      | "bottom-right"
      | "bottom-left"
      | "top-center"
      | "bottom-center";
  }>(),
  {
    position: "top-right",
  },
);

const { toasts, remove } = useToast();

const positionClasses = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
  "top-center": "top-0 left-1/2 -translate-x-1/2",
  "bottom-center": "bottom-0 left-1/2 -translate-x-1/2",
};
</script>
