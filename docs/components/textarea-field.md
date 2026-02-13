# TextareaField

Multi-line text input.

## Import

```ts
import { TextareaField } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { TextareaField } from '@four-bytes/four-tailwind-ui'

const message = ref('')
</script>

<template>
  <TextareaField 
    v-model="message" 
    label="Nachricht" 
    placeholder="Ihre Nachricht..."
  />
</template>
```

## Custom Rows

```vue
<TextareaField v-model="text" label="Beschreibung" :rows="5" />
```

## With Error

```vue
<TextareaField 
  v-model="text" 
  label="Kommentar"
  error="Bitte geben Sie einen Kommentar ein"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | - | Text value (v-model) |
| `label` | `string` | - | Field label |
| `placeholder` | `string` | - | Placeholder text |
| `rows` | `number` | `3` | Number of visible rows |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable textarea |
| `required` | `boolean` | `false` | Mark as required |
