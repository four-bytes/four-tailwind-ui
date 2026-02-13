<script setup lang="ts">
import { ref, computed } from 'vue'
import * as allIcons from '../../icons'

const props = withDefaults(defineProps<{
  /** Filter to show only specific icons */
  filter?: string[]
  /** Number of columns (auto-fill if not set) */
  columns?: number
  /** Show search input */
  searchable?: boolean
  /** Icon size in pixels */
  iconSize?: number
}>(), {
  searchable: true,
  iconSize: 24,
})

const search = ref('')
const copiedIcon = ref<string | null>(null)

// Get all icon names
const iconList = computed(() => {
  const names = Object.keys(allIcons).filter(
    name => name.endsWith('Icon') || name === 'HorizontalDots'
  )
  if (props.filter && props.filter.length > 0) {
    return names.filter(name => props.filter!.includes(name))
  }
  return names
})

// Filter by search
const filteredIcons = computed(() => {
  if (!search.value) return iconList.value
  const query = search.value.toLowerCase()
  return iconList.value.filter(name => name.toLowerCase().includes(query))
})

// Get icon component by name
const getIcon = (name: string) => {
  return allIcons[name as keyof typeof allIcons]
}

// Copy import statement
const copyImport = async (name: string) => {
  const importStatement = `import { ${name} } from '@four-bytes/four-tailwind-ui'`
  try {
    await navigator.clipboard.writeText(importStatement)
    copiedIcon.value = name
    setTimeout(() => {
      copiedIcon.value = null
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

// Grid style based on columns prop
const gridStyle = computed(() => {
  if (props.columns) {
    return { gridTemplateColumns: `repeat(${props.columns}, 1fr)` }
  }
  return { gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))' }
})
</script>

<template>
  <div class="icon-gallery">
    <!-- Search -->
    <div v-if="searchable" class="icon-gallery-search">
      <input
        v-model="search"
        type="text"
        placeholder="Search icons..."
        class="icon-gallery-input"
      />
      <span class="icon-gallery-count">{{ filteredIcons.length }} icons</span>
    </div>

    <!-- Grid -->
    <div class="icon-gallery-grid" :style="gridStyle">
      <button
        v-for="name in filteredIcons"
        :key="name"
        class="icon-gallery-card"
        :class="{ 'icon-gallery-card--copied': copiedIcon === name }"
        @click="copyImport(name)"
        :title="`Click to copy import for ${name}`"
      >
        <div class="icon-gallery-preview" :style="{ width: `${iconSize}px`, height: `${iconSize}px` }">
          <component :is="getIcon(name)" />
        </div>
        <span class="icon-gallery-name">{{ name }}</span>
        <span v-if="copiedIcon === name" class="icon-gallery-badge">Copied!</span>
      </button>
    </div>

    <!-- Empty State -->
    <div v-if="filteredIcons.length === 0" class="icon-gallery-empty">
      No icons found for "{{ search }}"
    </div>
  </div>
</template>

<style scoped>
.icon-gallery {
  --ig-border: #e5e7eb;
  --ig-bg: #ffffff;
  --ig-bg-soft: #f9fafb;
  --ig-text: #111827;
  --ig-text-muted: #6b7280;
  --ig-brand: #6366f1;
  --ig-success: #10b981;
  --ig-success-soft: #d1fae5;
  margin-top: 1.5rem;
}

:global(.dark) .icon-gallery,
.icon-gallery:global(.dark) {
  --ig-border: #374151;
  --ig-bg: #1f2937;
  --ig-bg-soft: #111827;
  --ig-text: #f9fafb;
  --ig-text-muted: #9ca3af;
  --ig-success-soft: #064e3b;
}

.icon-gallery-search {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon-gallery-input {
  flex: 1;
  padding: 0.75rem 1rem;
  border: 1px solid var(--ig-border);
  border-radius: 8px;
  font-size: 1rem;
  background: var(--ig-bg);
  color: var(--ig-text);
}

.icon-gallery-input:focus {
  outline: none;
  border-color: var(--ig-brand);
}

.icon-gallery-input::placeholder {
  color: var(--ig-text-muted);
}

.icon-gallery-count {
  color: var(--ig-text-muted);
  font-size: 0.875rem;
  white-space: nowrap;
}

.icon-gallery-grid {
  display: grid !important;
  gap: 1rem !important;
  width: 100% !important;
  box-sizing: border-box !important;
}

.icon-gallery-card {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  padding: 1.25rem 0.75rem !important;
  border: 1px solid var(--ig-border) !important;
  border-radius: 8px !important;
  background: var(--ig-bg) !important;
  cursor: pointer !important;
  transition: all 0.2s ease !important;
  position: relative !important;
  box-sizing: border-box !important;
  width: auto !important;
  margin: 0 !important;
}

.icon-gallery-card:hover {
  border-color: var(--ig-brand);
  background: var(--ig-bg-soft);
}

.icon-gallery-card--copied {
  border-color: var(--ig-success);
  background: var(--ig-success-soft);
}

.icon-gallery-preview {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--ig-text);
}

.icon-gallery-preview :deep(svg) {
  width: 100%;
  height: 100%;
}

.icon-gallery-name {
  margin-top: 0.75rem;
  font-size: 0.75rem;
  color: var(--ig-text-muted);
  text-align: center;
  word-break: break-word;
}

.icon-gallery-badge {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.625rem;
  padding: 2px 6px;
  background: var(--ig-success);
  color: white;
  border-radius: 4px;
}

.icon-gallery-empty {
  text-align: center;
  padding: 3rem;
  color: var(--ig-text-muted);
}
</style>
