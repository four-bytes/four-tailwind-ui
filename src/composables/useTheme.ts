import { ref, computed, onMounted, watch, provide, inject } from "vue";
import type { Ref, ComputedRef, InjectionKey } from "vue";

export type Theme = "light" | "dark";

export interface ThemeContext {
  theme: Ref<Theme>;
  isDarkMode: ComputedRef<boolean>;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeSymbol: InjectionKey<ThemeContext> = Symbol("theme");

export interface UseThemeProviderOptions {
  /** Storage key for persisting theme (default: 'theme') */
  storageKey?: string;
  /** Default theme if no stored or system preference (default: 'light') */
  defaultTheme?: Theme;
  /** Whether to sync with system preference (default: true) */
  syncWithSystem?: boolean;
}

/** Apply dark/light class to <html> immediately */
function applyThemeToDom(theme: Theme) {
  if (typeof document === "undefined") return;
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * Standalone theme initializer — call in main.ts as escape hatch
 * when you cannot use ThemeProvider for some reason.
 *
 * @example
 * // main.ts
 * import { autoInitTheme } from '@four-bytes/four-tailwind-ui'
 * autoInitTheme()
 */
export function autoInitTheme(
  storageKey = "theme",
  defaultTheme: Theme = "light",
) {
  if (typeof window === "undefined") return;
  const saved = localStorage.getItem(storageKey) as Theme | null;
  if (saved === "light" || saved === "dark") {
    applyThemeToDom(saved);
    return;
  }
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    applyThemeToDom("dark");
    return;
  }
  applyThemeToDom(defaultTheme);
}

export function useThemeProvider(options: UseThemeProviderOptions = {}) {
  const {
    storageKey = "theme",
    defaultTheme = "light",
    syncWithSystem = true,
  } = options;

  const theme = ref<Theme>(defaultTheme);
  const isInitialized = ref(false);

  const isDarkMode = computed(() => theme.value === "dark");

  const toggleTheme = () => {
    theme.value = theme.value === "light" ? "dark" : "light";
  };

  const setTheme = (newTheme: Theme) => {
    theme.value = newTheme;
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem(storageKey) as Theme | null;

    let initialTheme: Theme;

    if (savedTheme === "light" || savedTheme === "dark") {
      // 1. localStorage hat immer Vorrang (User-Entscheidung)
      initialTheme = savedTheme;
    } else if (
      syncWithSystem &&
      window.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
      // 2. System-Präferenz wenn kein gespeicherter Wert
      initialTheme = "dark";
    } else {
      // 3. defaultTheme als Fallback
      initialTheme = defaultTheme;
    }

    theme.value = initialTheme;
    applyThemeToDom(initialTheme);
    isInitialized.value = true;

    if (syncWithSystem) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (!localStorage.getItem(storageKey)) {
            const newTheme = e.matches ? "dark" : "light";
            theme.value = newTheme;
            applyThemeToDom(newTheme);
          }
        });
    }
  });

  watch([theme, isInitialized], ([newTheme, initialized]) => {
    if (initialized) {
      localStorage.setItem(storageKey, newTheme);
      applyThemeToDom(newTheme);
    }
  });

  const context: ThemeContext = {
    theme,
    isDarkMode,
    toggleTheme,
    setTheme,
  };

  provide(ThemeSymbol, context);

  return context;
}

export function useTheme(): ThemeContext {
  const context = inject(ThemeSymbol);
  if (!context) {
    if ((import.meta as unknown as { env?: { DEV?: boolean } }).env?.DEV) {
      console.warn(
        "[four-tailwind-ui] useTheme() called without a ThemeProvider ancestor. " +
          "Wrap your app root in <ThemeProvider> or <AdminLayout> (which includes it). " +
          "Alternatively call autoInitTheme() in main.ts. " +
          "Dark mode will not work correctly without one of these.",
      );
    }
    // Return a minimal no-op fallback so components render without crashing
    const fallbackTheme = ref<Theme>("light");
    return {
      theme: fallbackTheme,
      isDarkMode: computed(() => false),
      toggleTheme: () => {},
      setTheme: () => {},
    };
  }
  return context;
}
