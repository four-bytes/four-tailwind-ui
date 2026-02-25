declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Filter to show only specific icons */
    filter?: string[];
    /** Number of columns (auto-fill if not set) */
    columns?: number;
    /** Show search input */
    searchable?: boolean;
    /** Icon size in pixels */
    iconSize?: number;
}>, {
    searchable: boolean;
    iconSize: number;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    /** Filter to show only specific icons */
    filter?: string[];
    /** Number of columns (auto-fill if not set) */
    columns?: number;
    /** Show search input */
    searchable?: boolean;
    /** Icon size in pixels */
    iconSize?: number;
}>, {
    searchable: boolean;
    iconSize: number;
}>>> & Readonly<{}>, {
    searchable: boolean;
    iconSize: number;
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
//# sourceMappingURL=IconGallery.vue.d.ts.map