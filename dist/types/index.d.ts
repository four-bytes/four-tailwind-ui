export interface SelectOption {
    value: string | number;
    label: string;
}
export type Size = 'sm' | 'md' | 'lg';
export type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'danger';
export type AlertVariant = 'success' | 'error' | 'warning' | 'info';
export type BadgeVariant = 'light' | 'solid';
export type BadgeColor = 'primary' | 'success' | 'error' | 'warning' | 'info' | 'light' | 'dark';
export type InputState = 'default' | 'error' | 'success';
export interface MenuItem {
    label: string;
    to?: string;
    onClick?: () => void;
}
export interface TableColumn<T = unknown> {
    key: string;
    label: string;
    sortable?: boolean;
    width?: string;
    render?: (value: unknown, row: T) => string | number;
}
export type TrendDirection = 'up' | 'down';
export type { TailwindColor, ColorClasses, GaugeThreshold, GaugeDetail, StatsRow, BarChartItem, KeyValueRow, } from '../utils/colors';
//# sourceMappingURL=index.d.ts.map