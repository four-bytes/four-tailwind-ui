import { TailwindColor, GaugeThreshold, GaugeDetail } from '../../utils/colors';

declare function __VLS_template(): {
    details?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed above the gauge */
    label: string;
    /** Current value (null shows '--') */
    value: number | null;
    /** Maximum value (determines 100%) */
    max: number;
    /** Unit displayed next to value */
    unit: string;
    /** Optional subtitle below the gauge */
    subtitle?: string;
    /** Base color (used when percentage is above all thresholds) */
    color?: TailwindColor;
    /** Adaptive color thresholds. Default: [{at: 15, color: 'red'}, {at: 30, color: 'amber'}] */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Key-value detail rows below the gauge */
    details?: GaugeDetail[];
    /** Locale for number formatting (default: 'de-DE') */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    className?: string;
}>, {
    color: string;
    adaptive: boolean;
    locale: string;
    thresholds: () => {
        at: number;
        color: TailwindColor;
    }[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed above the gauge */
    label: string;
    /** Current value (null shows '--') */
    value: number | null;
    /** Maximum value (determines 100%) */
    max: number;
    /** Unit displayed next to value */
    unit: string;
    /** Optional subtitle below the gauge */
    subtitle?: string;
    /** Base color (used when percentage is above all thresholds) */
    color?: TailwindColor;
    /** Adaptive color thresholds. Default: [{at: 15, color: 'red'}, {at: 30, color: 'amber'}] */
    thresholds?: GaugeThreshold[];
    /** Enable adaptive color based on thresholds (default: true) */
    adaptive?: boolean;
    /** Key-value detail rows below the gauge */
    details?: GaugeDetail[];
    /** Locale for number formatting (default: 'de-DE') */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    className?: string;
}>, {
    color: string;
    adaptive: boolean;
    locale: string;
    thresholds: () => {
        at: number;
        color: TailwindColor;
    }[];
}>>> & Readonly<{}>, {
    color: TailwindColor;
    thresholds: GaugeThreshold[];
    adaptive: boolean;
    locale: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
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
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
//# sourceMappingURL=SemiCircleGauge.vue.d.ts.map