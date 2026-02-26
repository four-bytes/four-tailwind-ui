import { ref, computed, onMounted, onUnmounted, provide, inject } from "vue";
import type { Ref, ComputedRef, InjectionKey } from "vue";

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

export const SidebarSymbol: InjectionKey<SidebarContext> = Symbol("sidebar");

export interface UseSidebarProviderOptions {
  /** Initial expanded state (default: true) */
  initialExpanded?: boolean;
  /** Breakpoint for mobile detection in pixels (default: 768) */
  mobileBreakpoint?: number;
}

export function useSidebarProvider(options: UseSidebarProviderOptions = {}) {
  const { initialExpanded = true, mobileBreakpoint = 768 } = options;

  const isExpanded = ref(initialExpanded);
  const isMobileOpen = ref(false);
  const isMobile = ref(false);
  const isHovered = ref(false);
  const activeItem = ref<string | null>(null);
  const openSubmenu = ref<string | null>(null);

  const handleResize = () => {
    const mobile = window.innerWidth < mobileBreakpoint;
    isMobile.value = mobile;
    if (!mobile) {
      isMobileOpen.value = false;
    }
  };

  onMounted(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
  });

  const toggleSidebar = () => {
    if (isMobile.value) {
      isMobileOpen.value = !isMobileOpen.value;
    } else {
      isExpanded.value = !isExpanded.value;
    }
  };

  const toggleMobileSidebar = () => {
    isMobileOpen.value = !isMobileOpen.value;
  };

  const closeMobileSidebar = () => {
    isMobileOpen.value = false;
  };

  const setIsHovered = (value: boolean) => {
    isHovered.value = value;
  };

  const setActiveItem = (item: string | null) => {
    activeItem.value = item;
  };

  const toggleSubmenu = (item: string) => {
    openSubmenu.value = openSubmenu.value === item ? null : item;
  };

  const context: SidebarContext = {
    isExpanded: computed(() => (isMobile.value ? false : isExpanded.value)),
    isMobileOpen,
    isHovered,
    activeItem,
    openSubmenu,
    toggleSidebar,
    toggleMobileSidebar,
    closeMobileSidebar,
    setIsHovered,
    setActiveItem,
    toggleSubmenu,
  };

  provide(SidebarSymbol, context);

  return context;
}

export function useSidebar(): SidebarContext {
  const context = inject(SidebarSymbol);
  if (!context) {
    if ((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV) {
      console.warn(
        "[four-tailwind-ui] useSidebar() called without a SidebarProvider ancestor. " +
          "Wrap your layout in <AdminLayout> or <SidebarProvider>.",
      );
    }
    // Return a minimal no-op fallback
    return {
      isExpanded: computed(() => true),
      isMobileOpen: ref(false),
      isHovered: ref(false),
      activeItem: ref(null),
      openSubmenu: ref(null),
      toggleSidebar: () => {},
      toggleMobileSidebar: () => {},
      closeMobileSidebar: () => {},
      setIsHovered: () => {},
      setActiveItem: () => {},
      toggleSubmenu: () => {},
    };
  }
  return context;
}
