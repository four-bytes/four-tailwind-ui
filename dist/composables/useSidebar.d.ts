import { Ref, ComputedRef, InjectionKey } from 'vue';

export interface SidebarContext {
    isExpanded: ComputedRef<boolean>;
    isMobileOpen: Ref<boolean>;
    isHovered: Ref<boolean>;
    activeItem: Ref<string | null>;
    openSubmenu: Ref<string | null>;
    toggleSidebar: () => void;
    toggleMobileSidebar: () => void;
    closeMobileSidebar: () => void;
    setIsHovered: (isHovered: boolean) => void;
    setActiveItem: (item: string | null) => void;
    toggleSubmenu: (item: string) => void;
}
export declare const SidebarSymbol: InjectionKey<SidebarContext>;
export interface UseSidebarProviderOptions {
    /** Initial expanded state (default: true) */
    initialExpanded?: boolean;
    /** Breakpoint for mobile detection in pixels (default: 768) */
    mobileBreakpoint?: number;
}
export declare function useSidebarProvider(options?: UseSidebarProviderOptions): SidebarContext;
export declare function useSidebar(): SidebarContext;
//# sourceMappingURL=useSidebar.d.ts.map