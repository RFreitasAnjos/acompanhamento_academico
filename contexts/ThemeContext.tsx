'use client';

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  useSyncExternalStore,
  useCallback,
} from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  mounted: boolean;
  themePreference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  setThemePreference: (nextTheme: ThemePreference) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = 'academic:theme-preference';
const emptySubscribe = () => () => undefined;

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

function getStoredTheme(): ThemePreference {
  if (typeof window === 'undefined') return 'system';

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'light' || stored === 'dark' || stored === 'system') {
    return stored;
  }

  return 'system';
}

function resolveTheme(
  themePreference: ThemePreference,
  systemTheme: ResolvedTheme
): ResolvedTheme {
  return themePreference === 'system' ? systemTheme : themePreference;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const [themePreference, setThemePreferenceState] =
    useState<ThemePreference>(() => getStoredTheme());

  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>(() =>
    getSystemTheme()
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const syncSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', syncSystemTheme);
    };
  }, []);

  const resolvedTheme = useMemo(
    () => resolveTheme(themePreference, systemTheme),
    [themePreference, systemTheme]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    root.setAttribute('data-theme', resolvedTheme);
    root.style.colorScheme = resolvedTheme;

    window.localStorage.setItem(STORAGE_KEY, themePreference);
  }, [resolvedTheme, themePreference]);

  const toggleTheme = useCallback(() => {
    setThemePreferenceState((currentTheme) => {
      const currentResolvedTheme =
        currentTheme === 'system' ? systemTheme : currentTheme;

      return currentResolvedTheme === 'dark' ? 'light' : 'dark';
    });
  }, [systemTheme]);

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      mounted,
      themePreference,
      resolvedTheme,
      systemTheme,
      setThemePreference: setThemePreferenceState,
      toggleTheme,
    }),
    [mounted, themePreference, resolvedTheme, systemTheme, toggleTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}