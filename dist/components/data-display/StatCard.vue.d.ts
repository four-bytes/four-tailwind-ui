import { TailwindColor } from '../../utils/colors';

declare function __VLS_template(): {
    icon?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed in the header */
    label: string;
    /** Metric value (string or number, null shows '--') */
    value: string | number | null;
    /** Unit displayed after the value */
    unit?: string;
    /** Color theme */
    color?: TailwindColor;
    /** Subtitle text below the value */
    subtitle?: string;
    /** Custom subtitle color class (overrides default gray) */
    subtitleColor?: string;
    /** Show animated pulse indicator (e.g., for active/live state) */
    pulse?: boolean;
    /** Use absolute value for display (useful for bidirectional metrics) */
    absolute?: boolean;
    /** Locale for number formatting */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    absolute: boolean;
    locale: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Label displayed in the header */
    label: string;
    /** Metric value (string or number, null shows '--') */
    value: string | number | null;
    /** Unit displayed after the value */
    unit?: string;
    /** Color theme */
    color?: TailwindColor;
    /** Subtitle text below the value */
    subtitle?: string;
    /** Custom subtitle color class (overrides default gray) */
    subtitleColor?: string;
    /** Show animated pulse indicator (e.g., for active/live state) */
    pulse?: boolean;
    /** Use absolute value for display (useful for bidirectional metrics) */
    absolute?: boolean;
    /** Locale for number formatting */
    locale?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    absolute: boolean;
    locale: string;
}>>> & Readonly<{}>, {
    color: TailwindColor;
    locale: string;
    absolute: boolean;
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
//# sourceMappingURL=StatCard.vue.d.ts.map