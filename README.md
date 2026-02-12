# @four-bytes/tailwind-ui

Reusable Vue 3 + Tailwind CSS UI components based on TailAdmin.

## Installation

```bash
npm install @four-bytes/tailwind-ui
```

## Setup

### 1. Import the styles

In your main entry file (e.g., `main.ts`):

```ts
import '@four-bytes/tailwind-ui/style.css'
```

### 2. Configure Tailwind CSS

Extend your `tailwind.config.js`:

```js
import tailwindConfig from '@four-bytes/tailwind-ui/tailwind.config'

export default {
  presets: [tailwindConfig],
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/@four-bytes/tailwind-ui/**/*.{vue,js,ts}',
  ],
}
```

## Usage

```vue
<script setup>
import { Button, InputField, FormDialog } from '@four-bytes/tailwind-ui'
</script>

<template>
  <InputField
    v-model="email"
    label="Email"
    placeholder="Enter your email"
    :error="emailError"
  />
  
  <Button variant="primary" @click="submit">
    Submit
  </Button>
</template>
```

## Components

### Forms
- `InputField` - Text input with label, error/success states
- `InputGroup` - Input with prefix/suffix slots
- `SelectField` - Dropdown select
- `TextareaField` - Multi-line text input
- `CheckboxField` - Checkbox with label
- `DatePickerField` - Date input
- `TimePickerField` - Time input
- `ToggleSwitch` - Boolean toggle

### Buttons
- `Button` - Primary, outline, ghost, danger variants

### Feedback
- `Alert` - Success, error, warning, info alerts
- `Badge` - Status badges

### Overlays
- `Modal` - Base modal with backdrop
- `FormDialog` - Modal with form layout and buttons
- `ConfirmDialog` - Confirmation dialog with icon

## License

MIT - See [LICENSE](./LICENSE) and [NOTICE.md](./NOTICE.md) for attribution.
