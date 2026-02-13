# Alert

Dismissible alert messages for user feedback.

## Import

```ts
import { Alert } from '@four-bytes/four-tailwind-ui'
```

## Variants

### Success

```vue
<Alert variant="success" title="Erfolg" message="Die Aktion wurde erfolgreich ausgefuehrt." />
```

### Error

```vue
<Alert variant="error" title="Fehler" message="Es ist ein Fehler aufgetreten." />
```

### Warning

```vue
<Alert variant="warning" title="Warnung" message="Bitte beachten Sie diesen Hinweis." />
```

### Info

```vue
<Alert variant="info" title="Information" message="Hier ist eine wichtige Information." />
```

## Dismissible

```vue
<Alert 
  variant="info" 
  title="Hinweis" 
  message="Diese Meldung kann geschlossen werden."
  dismissible
  @dismiss="handleDismiss"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Alert style |
| `title` | `string` | - | Alert title |
| `message` | `string` | - | Alert message |
| `dismissible` | `boolean` | `false` | Show close button |

## Events

| Event | Payload | Description |
|-------|---------|-------------|
| `dismiss` | - | Emitted when close button is clicked |
