import { Theme } from '../../composables/useTheme';

declare function __VLS_template(): {
    sidebar?(_: {}): any;
    "sidebar-logo"?(_: {
        isExpanded: boolean;
        isHovered: boolean;
        isMobileOpen: boolean;
    }): any;
    "sidebar-nav"?(_: {
        isExpanded: boolean;
        isHovered: boolean;
        isMobileOpen: boolean;
        isCollapsed: boolean;
    }): any;
    "sidebar-footer"?(_: {
        isExpanded: boolean;
        isHovered: boolean;
        isMobileOpen: boolean;
    }): any;
    header?(_: {}): any;
    "header-logo"?(_: {}): any;
    "header-center"?(_: {}): any;
    "header-actions"?(_: {}): any;
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    defaultTheme?: Theme;
    storageKey?: string;
    syncWithSystem?: boolean;
}>, {
    defaultTheme: string;
    storageKey: string;
    syncWithSystem: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    defaultTheme?: Theme;
    storageKey?: string;
    syncWithSystem?: boolean;
}>, {
    defaultTheme: string;
    storageKey: string;
    syncWithSystem: boolean;
}>>> & Readonly<{}>, {
    storageKey: string;
    defaultTheme: Theme;
    syncWithSystem: boolean;
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
//# sourceMappingURL=AdminLayout.vue.d.ts.map