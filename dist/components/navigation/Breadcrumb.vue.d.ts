export interface BreadcrumbItem {
    /** Display label */
    label: string;
    /** URL for native anchor links */
    href?: string;
    /** Route object for vue-router */
    to?: string | object;
}
interface BreadcrumbProps {
    /** Page title displayed on the left */
    pageTitle: string;
    /** Breadcrumb items (last item is current page, not clickable) */
    items?: BreadcrumbItem[];
    /** Component to use for links (default: 'a', use 'router-link' for vue-router) */
    linkComponent?: string | object;
    /** Additional CSS classes for the outer wrapper */
    class?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BreadcrumbProps>, {
    items: () => never[];
    linkComponent: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<BreadcrumbProps>, {
    items: () => never[];
    linkComponent: string;
}>>> & Readonly<{}>, {
    items: BreadcrumbItem[];
    linkComponent: string | object;
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
//# sourceMappingURL=Breadcrumb.vue.d.ts.map