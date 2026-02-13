# SelectField

Dropdown select with options.

## Import

```ts
import { SelectField, type SelectOption } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<script setup>
import { ref } from 'vue'
import { SelectField, type SelectOption } from '@four-bytes/four-tailwind-ui'

const selected = ref('')

const options: SelectOption[] = [
  { value: 'de', label: 'Deutschland' },
  { value: 'at', label: 'Oesterreich' },
  { value: 'ch', label: 'Schweiz' },
]
</script>

<template>
  <SelectField v-model="selected" label="Land" :options="options" />
</template>
```

## With Placeholder

```vue
<SelectField 
  v-model="selected" 
  label="Land" 
  :options="options"
  placeholder="Bitte waehlen..."
/>
```

## With Error

```vue
<SelectField 
  v-model="selected" 
  label="Land" 
  :options="options"
  error="Bitte waehlen Sie ein Land"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string \| number` | - | Selected value (v-model) |
| `options` | `SelectOption[]` | `[]` | Available options |
| `label` | `string` | - | Field label |
| `placeholder` | `string` | - | Placeholder text |
| `error` | `string` | - | Error message |
| `disabled` | `boolean` | `false` | Disable select |
| `required` | `boolean` | `false` | Mark as required |

## Types

```ts
interface SelectOption {
  value: string | number
  label: string
}
```
