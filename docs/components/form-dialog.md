# FormDialog

Modal dialog with header, form content, and footer buttons.

## Import

```ts
import { FormDialog } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { FormDialog, InputField, Button } from '@four-bytes/four-tailwind-ui'

const isOpen = ref(false)
const saving = ref(false)
const name = ref('')

const save = async () => {
  saving.value = true
  // ... save logic
  saving.value = false
  isOpen.value = false
}
</script>

<template>
  <Button @click="isOpen = true">Bearbeiten</Button>
  
  <FormDialog
    v-if="isOpen"
    title="Benutzer bearbeiten"
    confirmText="Speichern"
    :loading="saving"
    @close="isOpen = false"
    @confirm="save"
  >
    <InputField v-model="name" label="Name" />
  </FormDialog>
</template>
```

## Danger Variant

```vue
<FormDialog
  title="Benutzer loeschen"
  confirmText="Loeschen"
  variant="danger"
  @close="close"
  @confirm="deleteUser"
>
  <p>Sind Sie sicher, dass Sie diesen Benutzer loeschen moechten?</p>
</FormDialog>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Dialog title |
| `subtitle` | `string` | - | Optional subtitle |
| `confirmText` | `string` | `'Bestaetigen'` | Confirm button text |
| `cancelText` | `string` | `'Abbrechen'` | Cancel button text |
| `loadingText` | `string` | - | Text when loading |
| `loading` | `boolean` | `false` | Loading state |
| `confirmDisabled` | `boolean` | `false` | Disable confirm button |
| `variant` | `'primary' \| 'danger'` | `'primary'` | Button variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Dialog size |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Emitted when dialog should close |
| `confirm` | - | Emitted when confirm button clicked |
