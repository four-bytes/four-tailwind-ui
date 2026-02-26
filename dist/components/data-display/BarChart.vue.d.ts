import { TailwindColor, BarChartItem } from '../../utils/colors';

declare function __VLS_template(): {
    header?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Data points for the bars */
    items: BarChartItem[];
    /** Chart color theme */
    color?: TailwindColor;
    /** Chart height in pixels (default: 140) */
    height?: number;
    /** Show value labels above bars (default: true) */
    showValues?: boolean;
    /** Format function for value labels. Default: auto-format large numbers */
    formatValue?: (value: number) => string;
    /** Minimum bar height in percent (default: 4) to keep zero-values visible */
    minBarPercent?: number;
    /** Show group boundaries (vertical line when group changes) */
    showGroupBoundary?: boolean;
    /** Label for empty state */
    emptyLabel?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    height: number;
    showValues: boolean;
    minBarPercent: number;
    showGroupBoundary: boolean;
    emptyLabel: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Data points for the bars */
    items: BarChartItem[];
    /** Chart color theme */
    color?: TailwindColor;
    /** Chart height in pixels (default: 140) */
    height?: number;
    /** Show value labels above bars (default: true) */
    showValues?: boolean;
    /** Format function for value labels. Default: auto-format large numbers */
    formatValue?: (value: number) => string;
    /** Minimum bar height in percent (default: 4) to keep zero-values visible */
    minBarPercent?: number;
    /** Show group boundaries (vertical line when group changes) */
    showGroupBoundary?: boolean;
    /** Label for empty state */
    emptyLabel?: string;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    height: number;
    showValues: boolean;
    minBarPercent: number;
    showGroupBoundary: boolean;
    emptyLabel: string;
}>>> & Readonly<{}>, {
    color: TailwindColor;
    height: number;
    showValues: boolean;
    minBarPercent: number;
    showGroupBoundary: boolean;
    emptyLabel: string;
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
//# sourceMappingURL=BarChart.vue.d.ts.map