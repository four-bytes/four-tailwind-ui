<template>
  <slot></slot>
</template>

<script setup lang="ts">
import { useThemeProvider, type Theme } from '../../composables/useTheme'

const props = withDefaults(
  defineProps<{
    /** Storage key for persisting theme */
    storageKey?: string
    /** Default theme if no stored or system preference */
    defaultTheme?: Theme
    /** Whether to sync with system preference */
    syncWithSystem?: boolean
  }>(),
  {
    storageKey: 'theme',
    defaultTheme: 'light',
    syncWithSystem: true,
  }
)

useThemeProvider({
  storageKey: props.storageKey,
  defaultTheme: props.defaultTheme,
  syncWithSystem: props.syncWithSystem,
})
</script>
