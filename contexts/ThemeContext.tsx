'use client';

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type ThemePreference = 'system' | 'light' | 'dark';
type ResolvedTheme = 'light' | 'dark';

type ThemeContextValue = {
  themePreference: ThemePreference;
  resolvedTheme: ResolvedTheme;
  systemTheme: ResolvedTheme;
  mounted: boolean;
  setThemePreference: (nextTheme: ThemePreference) => void;
  toggleTheme: () => void;
};

const STORAGE_KEY = 'academic:theme-preference';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): ResolvedTheme {
  if (typeof window === 'undefined') {
    return 'light';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function resolveTheme(themePreference: ThemePreference, systemTheme: ResolvedTheme): ResolvedTheme {
  if (themePreference === 'system') {
    return systemTheme;
  }

  return themePreference;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [themePreference, setThemePreferenceState] = useState<ThemePreference>('system');
  const [systemTheme, setSystemTheme] = useState<ResolvedTheme>('light');

  useEffect(() => {
    setMounted(true);

    const storedTheme = window.localStorage.getItem(STORAGE_KEY);
    if (storedTheme === 'light' || storedTheme === 'dark' || storedTheme === 'system') {
      setThemePreferenceState(storedTheme);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncSystemTheme = () => {
      setSystemTheme(mediaQuery.matches ? 'dark' : 'light');
    };

    syncSystemTheme();
    mediaQuery.addEventListener('change', syncSystemTheme);

    return () => {
      mediaQuery.removeEventListener('change', syncSystemTheme);
    };
  }, []);

  const resolvedTheme = useMemo(
    () => resolveTheme(themePreference, systemTheme),
    [systemTheme, themePreference]
  );

  useEffect(() => {
    if (!mounted) {
      return;
    }

    const root = document.documentElement;
    root.setAttribute('data-theme', resolvedTheme);
    root.style.colorScheme = resolvedTheme;
    window.localStorage.setItem(STORAGE_KEY, themePreference);
  }, [mounted, resolvedTheme, themePreference]);

  const toggleTheme = () => {
    setThemePreferenceState((currentTheme) => {
      const currentResolvedTheme = currentTheme === 'system' ? systemTheme : currentTheme;
      return currentResolvedTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const contextValue = useMemo<ThemeContextValue>(
    () => ({
      themePreference,
      resolvedTheme,
      systemTheme,
      mounted,
      setThemePreference: setThemePreferenceState,
      toggleTheme,
    }),
    [mounted, resolvedTheme, systemTheme, themePreference]
  );

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}