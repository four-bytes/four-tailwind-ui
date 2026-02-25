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

  const applyTheme = (newTheme: Theme) => {
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
    applyTheme(initialTheme);
    isInitialized.value = true;

    if (syncWithSystem) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          if (!localStorage.getItem(storageKey)) {
            const newTheme = e.matches ? "dark" : "light";
            theme.value = newTheme;
            applyTheme(newTheme);
          }
        });
    }
  });

  watch([theme, isInitialized], ([newTheme, initialized]) => {
    if (initialized) {
      localStorage.setItem(storageKey, newTheme);
      applyTheme(newTheme);
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
    throw new Error(
      "useTheme must be used within a component that has ThemeProvider as an ancestor",
    );
  }
  return context;
}
