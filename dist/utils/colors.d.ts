/**
 * Tailwind color utility for data-display components.
 * Maps color names to CSS classes for various contexts (stroke, text, bg, etc.).
 *
 * Since Tailwind CSS cannot use dynamic class names (e.g., `stroke-${color}-500`),
 * all classes must be statically defined so they can be found during build.
 */
/** All supported Tailwind color names */
export type TailwindColor = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "brand";
export interface ColorClasses {
    /** Hex color value (500 shade) for inline styles */
    hex: string;
    /** SVG stroke for track/background (light mode) */
    trackLight: string;
    /** SVG stroke for track/background (dark mode) */
    trackDark: string;
    /** SVG stroke for active bar */
    bar: string;
    /** Text color for values (light mode) */
    textLight: string;
    /** Text color for values (dark mode) */
    textDark: string;
    /** Background gradient from-color */
    gradient: string;
    /** Icon background */
    iconBg: string;
    /** Icon background (dark mode) */
    iconBgDark: string;
    /** Hover border color */
    hoverBorder: string;
    /** Progress bar gradient (light mode) */
    barGradient: string;
    /** Progress bar solid color (full opacity, highlighted) */
    barSolid: string;
    /** Progress bar solid color (50% opacity, current group) */
    barSolidMuted: string;
    /** Progress bar solid color (25% opacity, past group) */
    barSolidFaded: string;
}
export declare const colorMap: Record<TailwindColor, ColorClasses>;
/** Resolve the active color for adaptive gauge/progress components */
export declare function resolveAdaptiveColor(percent: number, baseColor: TailwindColor, thresholds?: GaugeThreshold[]): TailwindColor;
/** Threshold configuration for adaptive color changes */
export interface GaugeThreshold {
    /** Percentage below which this color activates */
    at: number;
    /** Tailwind color name to use */
    color: TailwindColor;
}
/** Detail row for gauge/stat components */
export interface GaugeDetail {
    label: string;
    value: string;
}
/** Row for stats list components */
export interface StatsRow {
    label: string;
    value: number | null;
    /** Max value for progress bar (default: 100) */
    max?: number;
    /** Color for this row */
    color?: TailwindColor;
    /** Unit to display after value */
    unit?: string;
    /** Number of decimal places (default: 1) */
    decimals?: number;
}
/** Data point for bar chart components */
export interface BarChartItem {
    label: string;
    value: number;
    /** Whether this item should be highlighted */
    highlighted?: boolean;
    /** Optional group identifier (for year boundaries, etc.) */
    group?: string | number;
}
/** Row for key-value list components */
export interface KeyValueRow {
    label: string;
    value: string;
    /** Highlight this row's value with accent color */
    accent?: boolean;
}
//# sourceMappingURL=colors.d.ts.map