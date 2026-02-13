# Card

Content card with optional header and footer.

## Import

```ts
import { Card } from '@four-bytes/four-tailwind-ui'
```

## Basic Usage

```vue
<Card>
  <p>Card content goes here.</p>
</Card>
```

## With Header

```vue
<Card title="Benutzer">
  <p>Benutzerinformationen...</p>
</Card>
```

## With Header and Footer

```vue
<Card title="Einstellungen">
  <template #header-actions>
    <Button size="sm">Bearbeiten</Button>
  </template>
  
  <p>Einstellungsoptionen...</p>
  
  <template #footer>
    <Button variant="primary">Speichern</Button>
  </template>
</Card>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Card header title |
| `padding` | `boolean` | `true` | Add padding to content |

## Slots

| Slot | Description |
|------|-------------|
| `default` | Card content |
| `header-actions` | Actions in header (right side) |
| `footer` | Card footer |
