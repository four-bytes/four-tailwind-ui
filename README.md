# @four-bytes/four-tailwind-ui

Reusable Vue 3 + Tailwind CSS UI components based on TailAdmin.

## Installation

```bash
npm install @four-bytes/four-tailwind-ui
```

## Setup

### 1. Import the styles

In your main entry file (e.g., `main.ts`):

```ts
import '@four-bytes/four-tailwind-ui/style.css'
```

### 2. Configure Tailwind CSS

Extend your `tailwind.config.js`:

```js
import tailwindConfig from '@four-bytes/four-tailwind-ui/tailwind.config'

export default {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@four-bytes/four-tailwind-ui/**/*.{vue,js,ts}',
  ],
}
```

## Usage

```vue
<script setup>
import { Button, InputField, Modal, CheckIcon } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <InputField
    v-model="email"
    label="Email"
    placeholder="Enter your email"
    :error="emailError"
  />
  
  <Button variant="primary" @click="submit">
    <CheckIcon class="w-4 h-4" />
    Submit
  </Button>
</template>
```

## Components

### Forms (11)

| Component | Description |
|-----------|-------------|
| `InputField` | Text input with label, error/success states |
| `InputGroup` | Input with prefix/suffix slots |
| `EmailField` | Email input with built-in validation |
| `SelectField` | Dropdown select |
| `TextareaField` | Multi-line text input |
| `CheckboxField` | Checkbox with label |
| `DatePickerField` | Native date input |
| `TimePickerField` | Native time input |
| `ToggleSwitch` | Boolean toggle switch |
| `MultiSelect` | Multi-select with tags |
| `FileInput` | File upload button |

### Buttons

| Component | Description |
|-----------|-------------|
| `Button` | Variants: primary, outline, ghost, danger. Sizes: sm, md, lg. Loading state. |

### Feedback

| Component | Description |
|-----------|-------------|
| `Alert` | Dismissible alerts: success, error, warning, info |
| `Badge` | Status badges with colors |

### Overlays

| Component | Description |
|-----------|-------------|
| `Modal` | Base modal with backdrop, ESC close, body scroll lock |
| `FormDialog` | Modal with header, form content, footer buttons |
| `ConfirmDialog` | Confirmation dialog with icon and variants |

### Layout (7)

| Component | Description |
|-----------|-------------|
| `AdminLayout` | Main layout with sidebar + header slots |
| `Sidebar` | Collapsible sidebar with logo/nav/footer slots |
| `Header` | Responsive header with toggle button |
| `SidebarProvider` | Sidebar state provider (wrap your app) |
| `ThemeProvider` | Dark mode provider with localStorage persistence |
| `ThemeToggler` | Dark/light mode toggle button |
| `Backdrop` | Mobile sidebar overlay |

### Data Display

| Component | Description |
|-----------|-------------|
| `Avatar` | Image or initials avatar with status indicator |
| `Card` | Content card with header/footer slots |

### Navigation

| Component | Description |
|-----------|-------------|
| `Breadcrumb` | Page breadcrumb with custom link component support |
| `DropdownMenu` | Dropdown menu with click-outside handling |

### Icons (47)

All icons from TailAdmin are included:

```vue
<script setup>
import { CheckIcon, TrashIcon, SettingsIcon } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <CheckIcon class="w-5 h-5 text-green-500" />
</template>
```

Available icons: `ArchiveIcon`, `BarChartIcon`, `BellIcon`, `BoxCubeIcon`, `BoxIcon`, `Calendar2Line`, `CalenderIcon`, `ChatIcon`, `CheckIcon`, `ChevronDownIcon`, `ChevronRightIcon`, `DocsIcon`, `DraftIcon`, `ErrorHexaIcon`, `ErrorIcon`, `FlagIcon`, `FolderIcon`, `GridIcon`, `HomeIcon`, `HorizontalDots`, `InfoCircleIcon`, `InfoIcon`, `LayoutDashboardIcon`, `ListIcon`, `LogoutIcon`, `MailBox`, `MailIcon`, `MenuIcon`, `Message2Line`, `PageIcon`, `PaperclipIcon`, `PieChartIcon`, `PlugInIcon`, `PlusIcon`, `RefreshIcon`, `SendIcon`, `SettingsIcon`, `StaredIcon`, `SuccessIcon`, `SupportIcon`, `TableIcon`, `TaskIcon`, `TrashIcon`, `TrashIconLg`, `UserCircleIcon`, `UserGroupIcon`, `WarningIcon`

## Composables

### useSidebar

```ts
import { useSidebar } from '@four-bytes/four-tailwind-ui'

const { isExpanded, isMobileOpen, toggleSidebar, toggleMobileSidebar } = useSidebar()
```

### useTheme

```ts
import { useTheme } from '@four-bytes/four-tailwind-ui'

const { isDarkMode, toggleTheme, setTheme } = useTheme()
```

### useClickOutside

```ts
import { useClickOutside } from '@four-bytes/four-tailwind-ui'
import { ref } from 'vue'

const dropdownRef = ref<HTMLElement | null>(null)
useClickOutside(dropdownRef, () => {
  isOpen.value = false
})
```

## Directives

### v-click-outside

```vue
<script setup>
import { vClickOutside } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <div v-click-outside="handleClickOutside">
    Dropdown content
  </div>
</template>
```

## Layout Example

```vue
<script setup>
import {
  SidebarProvider,
  ThemeProvider,
  AdminLayout,
  ThemeToggler,
  Avatar,
} from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <ThemeProvider>
    <SidebarProvider>
      <AdminLayout>
        <!-- Sidebar Logo -->
        <template #sidebar-logo="{ isExpanded }">
          <img v-if="isExpanded" src="/logo.svg" alt="Logo" />
          <img v-else src="/logo-icon.svg" alt="Logo" />
        </template>

        <!-- Sidebar Navigation -->
        <template #sidebar-nav="{ isCollapsed }">
          <nav>
            <a href="/">Dashboard</a>
            <a href="/settings">Settings</a>
          </nav>
        </template>

        <!-- Header Actions -->
        <template #header-actions>
          <ThemeToggler />
          <Avatar name="John Doe" />
        </template>

        <!-- Page Content -->
        <h1>Welcome</h1>
      </AdminLayout>
    </SidebarProvider>
  </ThemeProvider>
</template>
```

## Development

```bash
# Install dependencies
npm install

# Run tests
npm run test:run

# Build
npm run build

# Lint
npm run lint:fix
```

## License

MIT - See [LICENSE](./LICENSE) and [NOTICE.md](./NOTICE.md) for TailAdmin attribution.
