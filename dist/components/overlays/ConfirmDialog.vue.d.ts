declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: boolean;
    title: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "primary" | "danger" | "success";
    loading?: boolean;
    showIcon?: boolean;
}>, {
    modelValue: boolean;
    confirmText: string;
    cancelText: string;
    variant: string;
    loading: boolean;
    showIcon: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    cancel: () => void;
    close: () => void;
    "update:modelValue": (value: boolean) => void;
    confirm: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    modelValue?: boolean;
    title: string;
    message?: string;
    confirmText?: string;
    cancelText?: string;
    variant?: "primary" | "danger" | "success";
    loading?: boolean;
    showIcon?: boolean;
}>, {
    modelValue: boolean;
    confirmText: string;
    cancelText: string;
    variant: string;
    loading: boolean;
    showIcon: boolean;
}>>> & Readonly<{
    onCancel?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
    "onUpdate:modelValue"?: ((value: boolean) => any) | undefined;
    onConfirm?: (() => any) | undefined;
}>, {
    variant: "primary" | "danger" | "success";
    loading: boolean;
    modelValue: boolean;
    confirmText: string;
    cancelText: string;
    showIcon: boolean;
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
//# sourceMappingURL=ConfirmDialog.vue.d.ts.map