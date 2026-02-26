type AvatarSize = "xsmall" | "small" | "medium" | "large" | "xlarge" | "xxlarge";
type AvatarStatus = "online" | "offline" | "busy" | "none";
interface AvatarProps {
    /** Image source URL */
    src?: string;
    /** Alt text for image */
    alt?: string;
    /** Avatar size */
    size?: AvatarSize;
    /** Online status indicator */
    status?: AvatarStatus;
    /** Name for generating initials (used when no src provided) */
    name?: string;
    /** Custom initials (overrides name-based initials) */
    initials?: string;
    /** Background class for initials avatar */
    initialsBgClass?: string;
    /** Text class for initials avatar */
    initialsTextClass?: string;
    /** Additional CSS classes for the outer wrapper */
    class?: string;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AvatarProps>, {
    alt: string;
    size: string;
    status: string;
    initialsBgClass: string;
    initialsTextClass: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AvatarProps>, {
    alt: string;
    size: string;
    status: string;
    initialsBgClass: string;
    initialsTextClass: string;
}>>> & Readonly<{}>, {
    size: AvatarSize;
    alt: string;
    status: AvatarStatus;
    initialsBgClass: string;
    initialsTextClass: string;
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
//# sourceMappingURL=Avatar.vue.d.ts.map