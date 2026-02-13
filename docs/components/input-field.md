# InputField

Text input with label, error states, and validation support.

## Import

```ts
import { InputField } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { InputField } from '@four-bytes/four-tailwind-ui'

const name = ref('')
</script>

<template>
  <InputField v-model="name" label="Name" placeholder="Ihr Name" />
</template>
```

## With Error

```vue
<InputField 
  v-model="email" 
  label="E-Mail" 
  type="email"
  :error="emailError"
/>
```

## Disabled

```vue
<InputField v-model="value" label="Gesperrt" disabled />
```

## Required

```vue
<InputField v-model="value" label="Pflichtfeld" required />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | - | Input value (v-model) |
| `label` | `string` | - | Field label |
| `placeholder` | `string` | - | Placeholder text |
| `type` | `string` | `'text'` | Input type |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Mark as required |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `update:modelValue` | `string \| number` | Emitted on input change |
