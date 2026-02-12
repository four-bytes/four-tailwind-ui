<template>
  <div :class="['relative rounded-full flex-shrink-0', sizeClasses[size]]">
    <!-- Image Avatar -->
    <img
      v-if="src"
      :src="src"
      :alt="alt"
      class="object-cover rounded-full w-full h-full"
    />
    <!-- Initials Avatar -->
    <div
      v-else
      :class="[
        'flex items-center justify-center rounded-full w-full h-full font-medium',
        initialsBgClass,
        initialsTextClass,
      ]"
    >
      {{ computedInitials }}
    </div>
    <!-- Status Indicator -->
    <span
      v-if="status !== 'none'"
      :class="[
        'absolute bottom-0 right-0 rounded-full border-[1.5px] border-white dark:border-gray-900',
        statusSizeClasses[size],
        statusColorClasses[status] || '',
      ]"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type AvatarSize = 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'
type AvatarStatus = 'online' | 'offline' | 'busy' | 'none'

interface AvatarProps {
  /** Image source URL */
  src?: string
  /** Alt text for image */
  alt?: string
  /** Avatar size */
  size?: AvatarSize
  /** Online status indicator */
  status?: AvatarStatus
  /** Name for generating initials (used when no src provided) */
  name?: string
  /** Custom initials (overrides name-based initials) */
  initials?: string
  /** Background class for initials avatar */
  initialsBgClass?: string
  /** Text class for initials avatar */
  initialsTextClass?: string
}

const props = withDefaults(defineProps<AvatarProps>(), {
  alt: 'User Avatar',
  size: 'medium',
  status: 'none',
  initialsBgClass: 'bg-brand-100 dark:bg-brand-900',
  initialsTextClass: 'text-brand-600 dark:text-brand-400',
})

const computedInitials = computed(() => {
  if (props.initials) return props.initials

  if (props.name) {
    return props.name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2)
  }

  return '?'
})

const sizeClasses: Record<AvatarSize, string> = {
  xsmall: 'h-6 w-6 text-xs',
  small: 'h-8 w-8 text-xs',
  medium: 'h-10 w-10 text-sm',
  large: 'h-12 w-12 text-base',
  xlarge: 'h-14 w-14 text-lg',
  xxlarge: 'h-16 w-16 text-xl',
}

const statusSizeClasses: Record<AvatarSize, string> = {
  xsmall: 'h-1.5 w-1.5',
  small: 'h-2 w-2',
  medium: 'h-2.5 w-2.5',
  large: 'h-3 w-3',
  xlarge: 'h-3.5 w-3.5',
  xxlarge: 'h-4 w-4',
}

const statusColorClasses: Record<Exclude<AvatarStatus, 'none'>, string> = {
  online: 'bg-success-500',
  offline: 'bg-error-400',
  busy: 'bg-warning-500',
}
</script>
