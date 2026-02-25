export interface DropdownMenuItem {
    /** Display label */
    label: string;
    /** Icon component (optional) */
    icon?: object;
    /** Click handler */
    onClick?: () => void;
    /** Whether the item is disabled */
    disabled?: boolean;
}
interface DropdownMenuProps {
    /** Menu items (alternative to using the menu slot) */
    items?: DropdownMenuItem[];
    /** CSS class for the trigger button */
    buttonClass?: string;
    /** CSS class for the dropdown menu */
    menuClass?: string;
    /** CSS class for menu items */
    itemClass?: string;
    /** Position of the dropdown */
    position?: 'left' | 'right';
}
declare function __VLS_template(): {
    trigger?(_: {}): any;
    menu?(_: {
        close: () => void;
    }): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropdownMenuProps>, {
    items: () => never[];
    buttonClass: string;
    menuClass: string;
    itemClass: string;
    position: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    select: (item: DropdownMenuItem) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<DropdownMenuProps>, {
    items: () => never[];
    buttonClass: string;
    menuClass: string;
    itemClass: string;
    position: string;
}>>> & Readonly<{
    onSelect?: ((item: DropdownMenuItem) => any) | undefined;
}>, {
    items: DropdownMenuItem[];
    position: "left" | "right";
    buttonClass: string;
    menuClass: string;
    itemClass: string;
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
//# sourceMappingURL=DropdownMenu.vue.d.ts.map