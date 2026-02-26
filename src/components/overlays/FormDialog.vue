<template>
  <Modal v-model="isOpen" :size="size" :close-on-backdrop="closeOnBackdrop">
    <div
      class="no-scrollbar overflow-y-auto rounded-3xl bg-white p-6 dark:bg-gray-900 lg:p-8"
    >
      <!-- Header -->
      <div class="mb-6">
        <h5
          class="text-xl font-semibold text-gray-800 dark:text-white/90 lg:text-2xl"
        >
          {{ title }}
        </h5>
        <p
          v-if="subtitle"
          class="mt-1 text-sm text-gray-500 dark:text-gray-400"
        >
          {{ subtitle }}
        </p>
      </div>

      <!-- Body Slot -->
      <div>
        <slot></slot>
      </div>

      <!-- Footer -->
      <div class="mt-6 flex items-center gap-3 sm:justify-end">
        <button
          type="button"
          @click="handleCancel"
          class="flex w-full justify-center rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] sm:w-auto"
        >
          {{ cancelText }}
        </button>

        <button
          type="button"
          @click="handleConfirm"
          :disabled="loading || confirmDisabled"
          class="flex w-full justify-center rounded-lg px-4 py-2.5 text-sm font-medium text-white sm:w-auto disabled:opacity-50"
          :class="cn(confirmButtonClass)"
        >
          <svg
            v-if="loading"
            class="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {{ loading ? loadingText : confirmText }}
        </button>

        <slot name="extra-buttons"></slot>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { computed } from "vue";
import Modal from "./Modal.vue";
import { cn } from "../../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue?: boolean;
    title: string;
    subtitle?: string;
    confirmText?: string;
    cancelText?: string;
    loadingText?: string;
    loading?: boolean;
    confirmDisabled?: boolean;
    variant?: "primary" | "danger" | "success";
    size?: "sm" | "md" | "lg";
    closeOnBackdrop?: boolean;
  }>(),
  {
    modelValue: true,
    confirmText: "Save",
    cancelText: "Cancel",
    loadingText: "Please wait...",
    loading: false,
    confirmDisabled: false,
    variant: "primary",
    size: "md",
    closeOnBackdrop: true,
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

const confirmButtonClass = computed(() => {
  switch (props.variant) {
    case "danger":
      return "bg-error-500 hover:bg-error-600";
    case "success":
      return "bg-success-500 hover:bg-success-600";
    default:
      return "bg-brand-500 hover:bg-brand-600";
  }
});

const handleConfirm = () => {
  if (!props.loading && !props.confirmDisabled) {
    emit("confirm");
  }
};

const handleCancel = () => {
  emit("cancel");
  emit("close");
  emit("update:modelValue", false);
};
</script>
