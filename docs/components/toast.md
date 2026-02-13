# Toast

Toast notifications for temporary messages.

## Import

```ts
import { ToastContainer, useToast } from '@four-bytes/four-tailwind-ui'
```

## Setup

Add `ToastContainer` to your App root:

```vue
<script setup>
import { ToastContainer } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <div>
    <RouterView />
    <ToastContainer />
  </div>
</template>
```

## Usage

```vue
<script setup>
import { useToast } from '@four-bytes/four-tailwind-ui'

const toast = useToast()

const showSuccess = () => {
  toast.success('Erfolgreich gespeichert!')
}

const showError = () => {
  toast.error('Ein Fehler ist aufgetreten.')
}

const showWarning = () => {
  toast.warning('Bitte ueberpruefen Sie Ihre Eingabe.')
}

const showInfo = () => {
  toast.info('Neue Updates verfuegbar.')
}
</script>
```

## Options

```ts
toast.success('Nachricht', {
  duration: 5000,  // Auto-close after 5s (default: 3000)
  closable: true,  // Show close button (default: true)
})
```

## useToast API

| Method | Description |
|--------|-------------|
| `success(message, options?)` | Show success toast |
| `error(message, options?)` | Show error toast |
| `warning(message, options?)` | Show warning toast |
| `info(message, options?)` | Show info toast |
| `close(id)` | Close specific toast |
| `closeAll()` | Close all toasts |
