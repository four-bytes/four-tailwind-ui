# AdminLayout

Main application layout with sidebar and header.

## Import

```ts
import { 
  AdminLayout, 
  SidebarProvider, 
  ThemeProvider 
} from '@four-bytes/four-tailwind-ui'
```

## Basic Setup

```vue
<script setup>
import { 
  ThemeProvider, 
  SidebarProvider, 
  AdminLayout,
  ThemeToggler 
} from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <ThemeProvider>
    <SidebarProvider>
      <AdminLayout>
        <!-- Sidebar Logo -->
        <template #sidebar-logo="{ isExpanded }">
          <img v-if="isExpanded" src="/logo.svg" alt="Logo" class="h-8" />
          <img v-else src="/logo-icon.svg" alt="Logo" class="h-8" />
        </template>

        <!-- Sidebar Navigation -->
        <template #sidebar-nav>
          <nav class="space-y-1">
            <a href="/" class="block px-4 py-2 rounded hover:bg-gray-100">
              Dashboard
            </a>
            <a href="/settings" class="block px-4 py-2 rounded hover:bg-gray-100">
              Einstellungen
            </a>
          </nav>
        </template>

        <!-- Header Actions -->
        <template #header-actions>
          <ThemeToggler />
        </template>

        <!-- Page Content (default slot) -->
        <div class="p-6">
          <h1>Willkommen</h1>
        </div>
      </AdminLayout>
    </SidebarProvider>
  </ThemeProvider>
</template>
```

## Slots

| Slot | Props | Description |
|------|-------|-------------|
| `sidebar-logo` | `{ isExpanded }` | Logo area in sidebar |
| `sidebar-nav` | `{ isCollapsed }` | Navigation items |
| `sidebar-footer` | - | Footer area in sidebar |
| `header-actions` | - | Right side of header |
| `default` | - | Main page content |

## Related

- [ThemeProvider](/components/theme-provider) - Dark mode support
- [useSidebar](/guide/composables#usesidebar) - Sidebar state
