// Form Types
export interface SelectOption {
  value: string | number
  label: string
}

// Component Size Types
export type Size = 'sm' | 'md' | 'lg'

// Variant Types
export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger'
export type AlertVariant = 'success' | 'error' | 'warning' | 'info'
export type BadgeVariant = 'light' | 'solid'
export type BadgeColor = 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark'

// Input State Types
export type InputState = 'default' | 'error' | 'success'

// Menu Item Types
export interface MenuItem {
  label: string
  to?: string
  onClick?: () => void
}

// Table Types
export interface TableColumn<T = unknown> {
  key: string
  label: string
  sortable?: boolean
  width?: string
  render?: (value: unknown, row: T) => string | number
}

// Metric Card Types
export type TrendDirection = 'up' | 'down'
