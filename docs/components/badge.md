# Badge

Status badges with various colors and styles.

## Import

```ts
import { Badge } from '@four-bytes/four-tailwind-ui'
```

## Colors

```vue
<Badge color="primary">Primary</Badge>
<Badge color="success">Success</Badge>
<Badge color="error">Error</Badge>
<Badge color="warning">Warning</Badge>
<Badge color="info">Info</Badge>
```

## Variants

### Light (Default)

```vue
<Badge color="success" variant="light">Aktiv</Badge>
```

### Solid

```vue
<Badge color="success" variant="solid">Aktiv</Badge>
```

## With Icons

```vue
<script setup>
import { Badge, CheckIcon } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <Badge color="success">
    <CheckIcon class="w-3 h-3" />
    Erledigt
  </Badge>
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'success' \| 'error' \| 'warning' \| 'info' \| 'light' \| 'dark'` | `'primary'` | Badge color |
| `variant` | `'light' \| 'solid'` | `'light'` | Badge style |
