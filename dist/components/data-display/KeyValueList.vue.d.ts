import { TailwindColor, KeyValueRow } from '../../utils/colors';

declare function __VLS_template(): {
    header?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Key-value rows to display */
    rows: KeyValueRow[];
    /** Accent color for highlighted values */
    color?: TailwindColor;
    /** Show separator lines between rows (default: true) */
    showSeparators?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    showSeparators: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Key-value rows to display */
    rows: KeyValueRow[];
    /** Accent color for highlighted values */
    color?: TailwindColor;
    /** Show separator lines between rows (default: true) */
    showSeparators?: boolean;
    /** Additional CSS classes for the Card wrapper */
    class?: string;
}>, {
    color: string;
    showSeparators: boolean;
}>>> & Readonly<{}>, {
    color: TailwindColor;
    showSeparators: boolean;
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
//# sourceMappingURL=KeyValueList.vue.d.ts.map