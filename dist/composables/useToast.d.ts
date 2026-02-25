import { Ref } from 'vue';

export type ToastType = 'success' | 'error' | 'warning' | 'info';
export interface Toast {
    id: string;
    type: ToastType;
    title: string;
    message?: string;
    duration?: number;
}
export interface ToastOptions {
    title: string;
    message?: string;
    duration?: number;
    type?: ToastType;
}
declare function removeToast(id: string): void;
declare function clearAllToasts(): void;
/**
 * Toast notification composable
 *
 * @example
 * ```ts
 * const { success, error, warning, info } = useToast()
 *
 * success({ title: 'Saved!', message: 'Your changes have been saved.' })
 * error({ title: 'Error', message: 'Something went wrong.' })
 * ```
 */
export declare function useToast(): {
    toasts: Readonly<Ref<readonly {
        readonly id: string;
        readonly type: ToastType;
        readonly title: string;
        readonly message?: string | undefined;
        readonly duration?: number | undefined;
    }[], readonly {
        readonly id: string;
        readonly type: ToastType;
        readonly title: string;
        readonly message?: string | undefined;
        readonly duration?: number | undefined;
    }[]>>;
    success: (options: ToastOptions) => string;
    error: (options: ToastOptions) => string;
    warning: (options: ToastOptions) => string;
    info: (options: ToastOptions) => string;
    remove: typeof removeToast;
    clear: typeof clearAllToasts;
};
export {};
//# sourceMappingURL=useToast.d.ts.map