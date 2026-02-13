# Icons

A collection of SVG icons as Vue components. Click any icon to copy its import statement.

## Import

```ts
import { CheckIcon, TrashIcon, SettingsIcon } from '@four-bytes/four-tailwind-ui'
```

## Usage

```vue
<template>
  <CheckIcon class="w-5 h-5 text-green-500" />
  <TrashIcon class="w-5 h-5 text-red-500" />
  <SettingsIcon class="w-5 h-5" />
</template>
```

## All Icons

Available icons (click to copy):

`ArchiveIcon` `BarChartIcon` `BellIcon` `BoxCubeIcon` `BoxIcon` `Calendar2Line` `CalenderIcon` `ChatIcon` `CheckIcon` `ChevronDownIcon` `ChevronRightIcon` `DocsIcon` `DraftIcon` `ErrorHexaIcon` `ErrorIcon` `FlagIcon` `FolderIcon` `GridIcon` `HomeIcon` `HorizontalDots` `InfoCircleIcon` `InfoIcon` `LayoutDashboardIcon` `ListIcon` `LogoutIcon` `MailBox` `MailIcon` `MenuIcon` `Message2Line` `PageIcon` `PaperclipIcon` `PieChartIcon` `PlugInIcon` `PlusIcon` `RefreshIcon` `SendIcon` `SettingsIcon` `StaredIcon` `SuccessIcon` `SupportIcon` `TableIcon` `TaskIcon` `TrashIcon` `TrashIconLg` `UserCircleIcon` `UserGroupIcon` `WarningIcon`

::: tip Interactive Gallery
Use the `IconGallery` component in your app to display an interactive, searchable icon gallery.
:::

## Sizing

Icons are sized via CSS classes:

```vue
<CheckIcon class="w-4 h-4" />  <!-- 16px -->
<CheckIcon class="w-5 h-5" />  <!-- 20px -->
<CheckIcon class="w-6 h-6" />  <!-- 24px -->
<CheckIcon class="w-8 h-8" />  <!-- 32px -->
```

## Colors

Use Tailwind text color classes:

```vue
<CheckIcon class="w-5 h-5 text-gray-500" />
<CheckIcon class="w-5 h-5 text-brand-500" />
<CheckIcon class="w-5 h-5 text-green-500" />
<CheckIcon class="w-5 h-5 text-red-500" />
```

## IconGallery Component

You can use the `IconGallery` component in your own projects to display icons:

```vue
<script setup>
import { IconGallery } from '@four-bytes/four-tailwind-ui'
</script>

<template>
  <!-- Show all icons with search -->
  <IconGallery />
  
  <!-- Show specific icons only -->
  <IconGallery :filter="['CheckIcon', 'TrashIcon', 'SettingsIcon']" />
  
  <!-- Custom columns and no search -->
  <IconGallery :columns="4" :searchable="false" />
</template>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `filter` | `string[]` | - | Show only specific icons |
| `columns` | `number` | auto | Fixed number of columns |
| `searchable` | `boolean` | `true` | Show search input |
| `iconSize` | `number` | `24` | Icon preview size in pixels |
