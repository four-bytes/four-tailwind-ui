import { TailwindColor, GaugeThreshold } from '../../utils/colors';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed above the bar */
    label: string;
    /** Current value (0-max, null shows '--') */
    value: number | null;
    /** Maximum value (default: 100) */
    max?: number;
    /** Unit displayed after value (default: '%') */
    unit?: string;
    /** Base color */
    color?: TailwindColor;
    /** Adaptive color thresholds */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Show scale markers below the bar (default: true) */
    showScale?: boolean;
    /** Number of scale divisions (default: 4, showing 5 markers) */
    scaleDivisions?: number;
    /** Show percentage inside the bar (default: true) */
    showInnerLabel?: boolean;
    /** Bar height class (default: 'h-5') */
    barHeight?: string;
    /** Wrap in a Card component (default: true) */
    wrapped?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    max: number;
    unit: string;
    color: string;
    adaptive: boolean;
    showScale: boolean;
    scaleDivisions: number;
    showInnerLabel: boolean;
    barHeight: string;
    wrapped: boolean;
    thresholds: () => {
        at: number;
        color: TailwindColor;
    }[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed above the bar */
    label: string;
    /** Current value (0-max, null shows '--') */
    value: number | null;
    /** Maximum value (default: 100) */
    max?: number;
    /** Unit displayed after value (default: '%') */
    unit?: string;
    /** Base color */
    color?: TailwindColor;
    /** Adaptive color thresholds */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Show scale markers below the bar (default: true) */
    showScale?: boolean;
    /** Number of scale divisions (default: 4, showing 5 markers) */
    scaleDivisions?: number;
    /** Show percentage inside the bar (default: true) */
    showInnerLabel?: boolean;
    /** Bar height class (default: 'h-5') */
    barHeight?: string;
    /** Wrap in a Card component (default: true) */
    wrapped?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    max: number;
    unit: string;
    color: string;
    adaptive: boolean;
    showScale: boolean;
    scaleDivisions: number;
    showInnerLabel: boolean;
    barHeight: string;
    wrapped: boolean;
    thresholds: () => {
        at: number;
        color: TailwindColor;
    }[];
}>>> & Readonly<{}>, {
    color: TailwindColor;
    barHeight: string;
    max: number;
    unit: string;
    thresholds: GaugeThreshold[];
    adaptive: boolean;
    showScale: boolean;
    scaleDivisions: number;
    showInnerLabel: boolean;
    wrapped: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
//# sourceMappingURL=ProgressBar.vue.d.ts.map