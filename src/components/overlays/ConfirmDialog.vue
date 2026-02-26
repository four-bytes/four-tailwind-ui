<template>
  <FormDialog
    v-model="isOpen"
    :title="title"
    :subtitle="message"
    :confirmText="confirmText"
    :cancelText="cancelText"
    :loading="loading"
    :variant="variant"
    size="sm"
    @confirm="$emit('confirm')"
    @cancel="$emit('cancel')"
  >
    <!-- Icon -->
    <div v-if="showIcon" class="mb-4 flex justify-center">
      <div
        :class="
          cn(
            'flex h-12 w-12 items-center justify-center rounded-full',
            iconBgClass,
          )
        "
      >
        <!-- Danger Icon -->
        <svg
          v-if="variant === 'danger'"
          class="h-6 w-6 text-error-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <!-- Success Icon -->
        <svg
          v-else-if="variant === 'success'"
          class="h-6 w-6 text-success-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <!-- Primary/Default Icon -->
        <svg
          v-else
          class="h-6 w-6 text-brand-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>

    <!-- Extra content slot -->
    <slot></slot>
  </FormDialog>
</template>

<script setup lang="ts">
import { computed } from "vue";
import FormDialog from "./FormDialog.vue";
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "primary" | "danger" | "success";
    loading?: boolean;
    showIcon?: boolean;
  }>(),
  {
    modelValue: true,
    confirmText: "Confirm",
    cancelText: "Cancel",
    variant: "primary",
    loading: false,
    showIcon: true,
  },
);

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
  close: [];
  confirm: [];
  cancel: [];
}>();

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const iconBgClass = computed(() => {
  switch (props.variant) {
    case "danger":
      return "bg-error-100 dark:bg-error-500/20";
    case "success":
      return "bg-success-100 dark:bg-success-500/20";
    default:
      return "bg-brand-100 dark:bg-brand-500/20";
  }
});
</script>
