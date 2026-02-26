import { Component } from 'vue';

interface ButtonProps {
    size?: "sm" | "md" | "lg";
    variant?: "primary" | "outline" | "ghost" | "danger";
    startIcon?: Component;
    endIcon?: Component;
    class?: string;
    disabled?: boolean;
    loading?: boolean;
    type?: "button" | "submit" | "reset";
}
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    size: string;
    variant: string;
    class: string;
    disabled: boolean;
    loading: boolean;
    type: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    click: (event: MouseEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<ButtonProps>, {
    size: string;
    variant: string;
    class: string;
    disabled: boolean;
    loading: boolean;
    type: string;
}>>> & Readonly<{
    onClick?: ((event: MouseEvent) => any) | undefined;
}>, {
    size: "sm" | "md" | "lg";
    variant: "primary" | "outline" | "ghost" | "danger";
    class: string;
    disabled: boolean;
    loading: boolean;
    type: "button" | "submit" | "reset";
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
//# sourceMappingURL=Button.vue.d.ts.map