<template>
  <div
    :role="variant === 'error' || variant === 'warning' ? 'alert' : 'status'"
    :class="
      cn(
        'rounded-xl border p-4',
        variantClasses[variant].container,
        props.class,
      )
    "
  >
    <div class="flex items-start gap-3">
      <div :class="cn('-mt-0.5', variantClasses[variant].icon)">
        <!-- Success Icon -->
        <svg
          v-if="variant === 'success'"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM13.8066 8.47339C14.0671 8.21289 14.0671 7.78711 13.8066 7.52661C13.5461 7.26612 13.1203 7.26612 12.8598 7.52661L8.75002 11.6364L7.14021 10.0266C6.87972 9.76612 6.45393 9.76612 6.19344 10.0266C5.93295 10.2871 5.93295 10.7129 6.19344 10.9734L8.27663 13.0566C8.53712 13.3171 8.96291 13.3171 9.2234 13.0566L13.8066 8.47339Z"
            fill="currentColor"
          />
        </svg>
        <!-- Error Icon -->
        <svg
          v-else-if="variant === 'error'"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM10.8334 6.66667C10.8334 6.20643 10.4603 5.83333 10 5.83333C9.53978 5.83333 9.16669 6.20643 9.16669 6.66667V10C9.16669 10.4602 9.53978 10.8333 10 10.8333C10.4603 10.8333 10.8334 10.4602 10.8334 10V6.66667ZM10 14.1667C10.4603 14.1667 10.8334 13.7936 10.8334 13.3333C10.8334 12.8731 10.4603 12.5 10 12.5C9.53978 12.5 9.16669 12.8731 9.16669 13.3333C9.16669 13.7936 9.53978 14.1667 10 14.1667Z"
            fill="currentColor"
          />
        </svg>
        <!-- Warning Icon -->
        <svg
          v-else-if="variant === 'warning'"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.62861 2.5L1.38197 15C1.1396 15.4196 1.43087 15.9583 1.91736 15.9583H16.4107C16.8972 15.9583 17.1885 15.4196 16.9461 15L9.69949 2.5C9.45625 2.07956 8.87185 2.07956 8.62861 2.5ZM9.16407 6.66667C9.16407 6.20643 9.53717 5.83333 9.99741 5.83333C10.4576 5.83333 10.8307 6.20643 10.8307 6.66667V10C10.8307 10.4602 10.4576 10.8333 9.99741 10.8333C9.53717 10.8333 9.16407 10.4602 9.16407 10V6.66667ZM9.99741 14.1667C10.4576 14.1667 10.8307 13.7936 10.8307 13.3333C10.8307 12.8731 10.4576 12.5 9.99741 12.5C9.53717 12.5 9.16407 12.8731 9.16407 13.3333C9.16407 13.7936 9.53717 14.1667 9.99741 14.1667Z"
            fill="currentColor"
          />
        </svg>
        <!-- Info Icon -->
        <svg
          v-else
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18.3333C14.6024 18.3333 18.3334 14.6024 18.3334 10C18.3334 5.39763 14.6024 1.66667 10 1.66667C5.39765 1.66667 1.66669 5.39763 1.66669 10C1.66669 14.6024 5.39765 18.3333 10 18.3333ZM10.8334 6.66667C10.8334 7.12691 10.4603 7.5 10 7.5C9.53978 7.5 9.16669 7.12691 9.16669 6.66667C9.16669 6.20643 9.53978 5.83333 10 5.83333C10.4603 5.83333 10.8334 6.20643 10.8334 6.66667ZM10 9.16667C10.4603 9.16667 10.8334 9.53976 10.8334 10V13.3333C10.8334 13.7936 10.4603 14.1667 10 14.1667C9.53978 14.1667 9.16669 13.7936 9.16669 13.3333V10C9.16669 9.53976 9.53978 9.16667 10 9.16667Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div class="flex-1">
        <h4 class="mb-1 text-sm font-semibold text-gray-800 dark:text-white/90">
          {{ title }}
        </h4>

        <p class="text-sm text-gray-500 dark:text-gray-400">{{ message }}</p>

        <router-link
          v-if="showLink && linkHref"
          :to="linkHref"
          class="inline-block mt-3 text-sm font-medium text-gray-500 underline dark:text-gray-400"
        >
          {{ linkText }}
        </router-link>
      </div>

      <!-- Close Button -->
      <button
        v-if="dismissible"
        @click="$emit('dismiss')"
        class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 5L5 15M5 5L15 15"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { cn } from "../../utils/cn";

interface AlertProps {
  variant: "success" | "error" | "warning" | "info";
  title: string;
  message: string;
  showLink?: boolean;
  linkHref?: string;
  linkText?: string;
  dismissible?: boolean;
  class?: string;
}

const props = withDefaults(defineProps<AlertProps>(), {
  showLink: false,
  linkHref: "#",
  linkText: "Learn more",
  dismissible: false,
  class: "",
});

defineOptions({ inheritAttrs: false });

defineEmits<{
  dismiss: [];
}>();

const variantClasses = {
  success: {
    container:
      "border-success-500 bg-success-50 dark:border-success-500/30 dark:bg-success-500/15",
    icon: "text-success-500",
  },
  error: {
    container:
      "border-error-500 bg-error-50 dark:border-error-500/30 dark:bg-error-500/15",
    icon: "text-error-500",
  },
  warning: {
    container:
      "border-warning-500 bg-warning-50 dark:border-warning-500/30 dark:bg-warning-500/15",
    icon: "text-warning-500",
  },
  info: {
    container:
      "border-blue-light-500 bg-blue-light-50 dark:border-blue-light-500/30 dark:bg-blue-light-500/15",
    icon: "text-blue-light-500",
  },
};
</script>
