import { Ref, ComputedRef, InjectionKey } from 'vue';

export type Theme = "light" | "dark";
export interface ThemeContext {
    theme: Ref<Theme>;
    isDarkMode: ComputedRef<boolean>;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeSymbol: InjectionKey<ThemeContext>;
export interface UseThemeProviderOptions {
    /** Storage key for persisting theme (default: 'theme') */
    storageKey?: string;
    /** Default theme if no stored or system preference (default: 'light') */
    defaultTheme?: Theme;
    /** Whether to sync with system preference (default: true) */
    syncWithSystem?: boolean;
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
export declare function autoInitTheme(storageKey?: string, defaultTheme?: Theme): void;
export declare function useThemeProvider(options?: UseThemeProviderOptions): ThemeContext;
export declare function useTheme(): ThemeContext;
//# sourceMappingURL=useTheme.d.ts.map