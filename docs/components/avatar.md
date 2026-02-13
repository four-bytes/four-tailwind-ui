# Avatar

User avatar with image or initials fallback.

## Import

```ts
import { Avatar } from '@four-bytes/four-tailwind-ui'
```

## With Image

```vue
<Avatar src="/images/user.jpg" alt="Max Mustermann" />
```

## With Initials

```vue
<Avatar name="Max Mustermann" />
<!-- Shows "MM" -->
```

## Sizes

```vue
<Avatar name="Max" size="xs" />  <!-- 24px -->
<Avatar name="Max" size="sm" />  <!-- 32px -->
<Avatar name="Max" size="md" />  <!-- 40px -->
<Avatar name="Max" size="lg" />  <!-- 48px -->
<Avatar name="Max" size="xl" />  <!-- 56px -->
```

## With Status

```vue
<Avatar name="Max" status="online" />
<Avatar name="Max" status="offline" />
<Avatar name="Max" status="busy" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | - | Image alt text |
| `name` | `string` | - | Name for initials fallback |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| `status` | `'online' \| 'offline' \| 'busy'` | - | Status indicator |
