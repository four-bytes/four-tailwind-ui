/**
 * Tailwind color utility for data-display components.
 * Maps color names to CSS classes for various contexts (stroke, text, bg, etc.).
 *
 * Since Tailwind CSS cannot use dynamic class names (e.g., `stroke-${color}-500`),
 * all classes must be statically defined so they can be found during build.
 */

/** All supported Tailwind color names */
export type TailwindColor =
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose"
  | "brand";

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

export const colorMap: Record<TailwindColor, ColorClasses> = {
  red: {
    hex: "#ef4444",
    trackLight: "stroke-red-200",
    trackDark: "dark:stroke-red-900/40",
    bar: "stroke-red-500",
    textLight: "text-red-600",
    textDark: "dark:text-red-400",
    gradient: "from-red-500/5",
    iconBg: "bg-red-100",
    iconBgDark: "dark:bg-red-500/10",
    hoverBorder: "hover:border-red-500/30",
    barGradient: "from-red-600 to-red-400",
    barSolid: "bg-red-500",
    barSolidMuted: "bg-red-500/50",
    barSolidFaded: "bg-red-500/25",
  },
  orange: {
    hex: "#f97316",
    trackLight: "stroke-orange-200",
    trackDark: "dark:stroke-orange-900/40",
    bar: "stroke-orange-500",
    textLight: "text-orange-600",
    textDark: "dark:text-orange-400",
    gradient: "from-orange-500/5",
    iconBg: "bg-orange-100",
    iconBgDark: "dark:bg-orange-500/10",
    hoverBorder: "hover:border-orange-500/30",
    barGradient: "from-orange-600 to-orange-400",
    barSolid: "bg-orange-500",
    barSolidMuted: "bg-orange-500/50",
    barSolidFaded: "bg-orange-500/25",
  },
  amber: {
    hex: "#f59e0b",
    trackLight: "stroke-amber-200",
    trackDark: "dark:stroke-amber-900/30",
    bar: "stroke-amber-500",
    textLight: "text-amber-600",
    textDark: "dark:text-amber-400",
    gradient: "from-amber-500/5",
    iconBg: "bg-amber-100",
    iconBgDark: "dark:bg-amber-500/10",
    hoverBorder: "hover:border-amber-500/30",
    barGradient: "from-amber-600 to-amber-400",
    barSolid: "bg-amber-500",
    barSolidMuted: "bg-amber-500/50",
    barSolidFaded: "bg-amber-500/25",
  },
  yellow: {
    hex: "#eab308",
    trackLight: "stroke-yellow-200",
    trackDark: "dark:stroke-yellow-900/30",
    bar: "stroke-yellow-500",
    textLight: "text-yellow-600",
    textDark: "dark:text-yellow-400",
    gradient: "from-yellow-500/5",
    iconBg: "bg-yellow-100",
    iconBgDark: "dark:bg-yellow-500/10",
    hoverBorder: "hover:border-yellow-500/30",
    barGradient: "from-yellow-600 to-yellow-400",
    barSolid: "bg-yellow-500",
    barSolidMuted: "bg-yellow-500/50",
    barSolidFaded: "bg-yellow-500/25",
  },
  lime: {
    hex: "#84cc16",
    trackLight: "stroke-lime-200",
    trackDark: "dark:stroke-lime-900/30",
    bar: "stroke-lime-500",
    textLight: "text-lime-600",
    textDark: "dark:text-lime-400",
    gradient: "from-lime-500/5",
    iconBg: "bg-lime-100",
    iconBgDark: "dark:bg-lime-500/10",
    hoverBorder: "hover:border-lime-500/30",
    barGradient: "from-lime-600 to-lime-400",
    barSolid: "bg-lime-500",
    barSolidMuted: "bg-lime-500/50",
    barSolidFaded: "bg-lime-500/25",
  },
  green: {
    hex: "#22c55e",
    trackLight: "stroke-green-200",
    trackDark: "dark:stroke-green-900/30",
    bar: "stroke-green-500",
    textLight: "text-green-600",
    textDark: "dark:text-green-400",
    gradient: "from-green-500/5",
    iconBg: "bg-green-100",
    iconBgDark: "dark:bg-green-500/10",
    hoverBorder: "hover:border-green-500/30",
    barGradient: "from-green-600 to-green-400",
    barSolid: "bg-green-500",
    barSolidMuted: "bg-green-500/50",
    barSolidFaded: "bg-green-500/25",
  },
  emerald: {
    hex: "#10b981",
    trackLight: "stroke-emerald-200",
    trackDark: "dark:stroke-emerald-900/30",
    bar: "stroke-emerald-500",
    textLight: "text-emerald-600",
    textDark: "dark:text-emerald-400",
    gradient: "from-emerald-500/5",
    iconBg: "bg-emerald-100",
    iconBgDark: "dark:bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/30",
    barGradient: "from-emerald-600 to-emerald-400",
    barSolid: "bg-emerald-500",
    barSolidMuted: "bg-emerald-500/50",
    barSolidFaded: "bg-emerald-500/25",
  },
  teal: {
    hex: "#14b8a6",
    trackLight: "stroke-teal-200",
    trackDark: "dark:stroke-teal-900/30",
    bar: "stroke-teal-500",
    textLight: "text-teal-600",
    textDark: "dark:text-teal-400",
    gradient: "from-teal-500/5",
    iconBg: "bg-teal-100",
    iconBgDark: "dark:bg-teal-500/10",
    hoverBorder: "hover:border-teal-500/30",
    barGradient: "from-teal-600 to-teal-400",
    barSolid: "bg-teal-500",
    barSolidMuted: "bg-teal-500/50",
    barSolidFaded: "bg-teal-500/25",
  },
  cyan: {
    hex: "#06b6d4",
    trackLight: "stroke-cyan-200",
    trackDark: "dark:stroke-cyan-900/30",
    bar: "stroke-cyan-500",
    textLight: "text-cyan-600",
    textDark: "dark:text-cyan-400",
    gradient: "from-cyan-500/5",
    iconBg: "bg-cyan-100",
    iconBgDark: "dark:bg-cyan-500/10",
    hoverBorder: "hover:border-cyan-500/30",
    barGradient: "from-cyan-600 to-cyan-400",
    barSolid: "bg-cyan-500",
    barSolidMuted: "bg-cyan-500/50",
    barSolidFaded: "bg-cyan-500/25",
  },
  sky: {
    hex: "#0ea5e9",
    trackLight: "stroke-sky-200",
    trackDark: "dark:stroke-sky-900/30",
    bar: "stroke-sky-500",
    textLight: "text-sky-600",
    textDark: "dark:text-sky-400",
    gradient: "from-sky-500/5",
    iconBg: "bg-sky-100",
    iconBgDark: "dark:bg-sky-500/10",
    hoverBorder: "hover:border-sky-500/30",
    barGradient: "from-sky-600 to-sky-400",
    barSolid: "bg-sky-500",
    barSolidMuted: "bg-sky-500/50",
    barSolidFaded: "bg-sky-500/25",
  },
  blue: {
    hex: "#3b82f6",
    trackLight: "stroke-blue-200",
    trackDark: "dark:stroke-blue-900/30",
    bar: "stroke-blue-500",
    textLight: "text-blue-600",
    textDark: "dark:text-blue-400",
    gradient: "from-blue-500/5",
    iconBg: "bg-blue-100",
    iconBgDark: "dark:bg-blue-500/10",
    hoverBorder: "hover:border-blue-500/30",
    barGradient: "from-blue-600 to-blue-400",
    barSolid: "bg-blue-500",
    barSolidMuted: "bg-blue-500/50",
    barSolidFaded: "bg-blue-500/25",
  },
  indigo: {
    hex: "#6366f1",
    trackLight: "stroke-indigo-200",
    trackDark: "dark:stroke-indigo-900/30",
    bar: "stroke-indigo-500",
    textLight: "text-indigo-600",
    textDark: "dark:text-indigo-400",
    gradient: "from-indigo-500/5",
    iconBg: "bg-indigo-100",
    iconBgDark: "dark:bg-indigo-500/10",
    hoverBorder: "hover:border-indigo-500/30",
    barGradient: "from-indigo-600 to-indigo-400",
    barSolid: "bg-indigo-500",
    barSolidMuted: "bg-indigo-500/50",
    barSolidFaded: "bg-indigo-500/25",
  },
  violet: {
    hex: "#8b5cf6",
    trackLight: "stroke-violet-200",
    trackDark: "dark:stroke-violet-900/30",
    bar: "stroke-violet-500",
    textLight: "text-violet-600",
    textDark: "dark:text-violet-400",
    gradient: "from-violet-500/5",
    iconBg: "bg-violet-100",
    iconBgDark: "dark:bg-violet-500/10",
    hoverBorder: "hover:border-violet-500/30",
    barGradient: "from-violet-600 to-violet-400",
    barSolid: "bg-violet-500",
    barSolidMuted: "bg-violet-500/50",
    barSolidFaded: "bg-violet-500/25",
  },
  purple: {
    hex: "#a855f7",
    trackLight: "stroke-purple-200",
    trackDark: "dark:stroke-purple-900/30",
    bar: "stroke-purple-500",
    textLight: "text-purple-600",
    textDark: "dark:text-purple-400",
    gradient: "from-purple-500/5",
    iconBg: "bg-purple-100",
    iconBgDark: "dark:bg-purple-500/10",
    hoverBorder: "hover:border-purple-500/30",
    barGradient: "from-purple-600 to-purple-400",
    barSolid: "bg-purple-500",
    barSolidMuted: "bg-purple-500/50",
    barSolidFaded: "bg-purple-500/25",
  },
  fuchsia: {
    hex: "#d946ef",
    trackLight: "stroke-fuchsia-200",
    trackDark: "dark:stroke-fuchsia-900/30",
    bar: "stroke-fuchsia-500",
    textLight: "text-fuchsia-600",
    textDark: "dark:text-fuchsia-400",
    gradient: "from-fuchsia-500/5",
    iconBg: "bg-fuchsia-100",
    iconBgDark: "dark:bg-fuchsia-500/10",
    hoverBorder: "hover:border-fuchsia-500/30",
    barGradient: "from-fuchsia-600 to-fuchsia-400",
    barSolid: "bg-fuchsia-500",
    barSolidMuted: "bg-fuchsia-500/50",
    barSolidFaded: "bg-fuchsia-500/25",
  },
  pink: {
    hex: "#ec4899",
    trackLight: "stroke-pink-200",
    trackDark: "dark:stroke-pink-900/30",
    bar: "stroke-pink-500",
    textLight: "text-pink-600",
    textDark: "dark:text-pink-400",
    gradient: "from-pink-500/5",
    iconBg: "bg-pink-100",
    iconBgDark: "dark:bg-pink-500/10",
    hoverBorder: "hover:border-pink-500/30",
    barGradient: "from-pink-600 to-pink-400",
    barSolid: "bg-pink-500",
    barSolidMuted: "bg-pink-500/50",
    barSolidFaded: "bg-pink-500/25",
  },
  rose: {
    hex: "#f43f5e",
    trackLight: "stroke-rose-200",
    trackDark: "dark:stroke-rose-900/30",
    bar: "stroke-rose-500",
    textLight: "text-rose-600",
    textDark: "dark:text-rose-400",
    gradient: "from-rose-500/5",
    iconBg: "bg-rose-100",
    iconBgDark: "dark:bg-rose-500/10",
    hoverBorder: "hover:border-rose-500/30",
    barGradient: "from-rose-600 to-rose-400",
    barSolid: "bg-rose-500",
    barSolidMuted: "bg-rose-500/50",
    barSolidFaded: "bg-rose-500/25",
  },
  brand: {
    hex: "#465fff",
    trackLight: "stroke-brand-200",
    trackDark: "dark:stroke-brand-900/30",
    bar: "stroke-brand-500",
    textLight: "text-brand-600",
    textDark: "dark:text-brand-400",
    gradient: "from-brand-500/5",
    iconBg: "bg-brand-100",
    iconBgDark: "dark:bg-brand-500/10",
    hoverBorder: "hover:border-brand-500/30",
    barGradient: "from-brand-600 to-brand-400",
    barSolid: "bg-brand-500",
    barSolidMuted: "bg-brand-500/50",
    barSolidFaded: "bg-brand-500/25",
  },
};

/** Resolve the active color for adaptive gauge/progress components */
export function resolveAdaptiveColor(
  percent: number,
  baseColor: TailwindColor,
  thresholds?: GaugeThreshold[],
): TailwindColor {
  if (!thresholds || thresholds.length === 0) return baseColor;

  // Thresholds sorted ascending - find the last one that matches
  const sorted = [...thresholds].sort((a, b) => a.at - b.at);
  for (const t of sorted) {
    if (percent < t.at) return t.color;
  }
  return baseColor;
}

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
