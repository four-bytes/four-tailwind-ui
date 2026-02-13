# ThemeProvider

Dark mode provider with localStorage persistence.

## Import

```ts
import { ThemeProvider, useTheme, ThemeToggler } from '@four-bytes/four-tailwind-ui'
```

## Setup

Wrap your app with `ThemeProvider`:

```vue
<script setup>
import { ThemeProvider } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <ThemeProvider>
    <App />
  </ThemeProvider>
</template>
```

## ThemeToggler

Built-in toggle button:

```vue
<script setup>
import { ThemeToggler } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <ThemeToggler />
</template>
```

## useTheme Composable

Access theme state programmatically:

```vue
<script setup>
import { useTheme } from '@four-bytes/four-tailwind-ui'

const { isDarkMode, toggleTheme, setTheme } = useTheme()

// Toggle
toggleTheme()

// Set explicitly
setTheme('dark')
setTheme('light')
</script>

<template>
  <button @click="toggleTheme">
    {{ isDarkMode ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>
```

## useTheme API

| Property/Method | Type | Description |
|-----------------|------|-------------|
| `isDarkMode` | `Ref<boolean>` | Current dark mode state |
| `toggleTheme()` | `() => void` | Toggle between light/dark |
| `setTheme(theme)` | `(theme: 'light' \| 'dark') => void` | Set specific theme |

## Features

- Persists preference in localStorage
- Respects system preference on first load
- Adds `dark` class to `<html>` element
- Works with Tailwind's dark mode
