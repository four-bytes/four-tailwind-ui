# CheckboxField

Checkbox input with label.

## Import

```ts
import { CheckboxField } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { CheckboxField } from '@four-bytes/four-tailwind-ui'

const agreed = ref(false)
</script>

<template>
  <CheckboxField v-model="agreed" label="Ich akzeptiere die AGB" />
</template>
```

## Disabled

```vue
<CheckboxField v-model="value" label="Gesperrt" disabled />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `boolean` | `false` | Checked state (v-model) |
| `label` | `string` | - | Checkbox label |
| `disabled` | `boolean` | `false` | Disable checkbox |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `boolean` | Emitted on change |
