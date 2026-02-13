# ConfirmDialog

Confirmation dialog with icon and action buttons.

## Import

```ts
import { ConfirmDialog } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { ConfirmDialog, Button } from '@four-bytes/four-tailwind-ui'

const showConfirm = ref(false)
const deleting = ref(false)

const handleDelete = async () => {
  deleting.value = true
  // ... delete logic
  deleting.value = false
  showConfirm.value = false
}
</script>

<template>
  <Button variant="danger" @click="showConfirm = true">Loeschen</Button>
  
  <ConfirmDialog
    v-if="showConfirm"
    title="Eintrag loeschen"
    message="Moechten Sie diesen Eintrag wirklich loeschen? Diese Aktion kann nicht rueckgaengig gemacht werden."
    confirmText="Loeschen"
    variant="danger"
    :loading="deleting"
    @close="showConfirm = false"
    @confirm="handleDelete"
  />
</template>
```

## Primary Variant

```vue
<ConfirmDialog
  title="Aenderungen speichern"
  message="Moechten Sie die Aenderungen speichern?"
  confirmText="Speichern"
  variant="primary"
  @close="close"
  @confirm="save"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Dialog title |
| `message` | `string` | - | Confirmation message |
| `confirmText` | `string` | `'Bestaetigen'` | Confirm button text |
| `cancelText` | `string` | `'Abbrechen'` | Cancel button text |
| `variant` | `'primary' \| 'danger'` | `'primary'` | Button/icon variant |
| `loading` | `boolean` | `false` | Loading state |
| `showIcon` | `boolean` | `true` | Show icon |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `close` | - | Emitted when dialog should close |
| `confirm` | - | Emitted when confirmed |
