'use client';

import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

type ThemeToggleProps = {
  className?: string;
  compact?: boolean;
};

const labelByTheme = {
  system: 'Auto',
  light: 'Light',
  dark: 'Dark',
} as const;

export default function ThemeToggle({ className = '', compact = false }: ThemeToggleProps) {
  const { mounted, resolvedTheme, systemTheme, themePreference, toggleTheme } = useTheme();

  const activeThemeLabel = mounted ? labelByTheme[themePreference] : 'Theme';
  const systemLabel = mounted ? `System ${systemTheme === 'dark' ? 'dark' : 'light'}` : 'System';
  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group inline-flex items-center gap-3 rounded-full border border-border bg-surface/90 p-1.5 text-left shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_14px_30px_rgba(15,23,42,0.12)] ${className}`}
      aria-label="Alterar tema"
      title="Alternar entre light e dark mode"
      aria-pressed={isDark}
    >
      <span className="relative flex items-center rounded-full bg-surface-muted p-1">
        <span
          className={`absolute inset-y-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-linear-to-r from-primary to-secondary shadow-[0_10px_20px_rgba(29,78,216,0.18)] transition-transform duration-300 ${isDark ? 'translate-x-full' : 'translate-x-0'}`}
        />

        <span className="relative z-10 flex min-w-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
          <SunMedium className={`h-4 w-4 transition-colors duration-300 ${isDark ? 'text-muted' : 'text-white'}`} />
          {!compact && <span className="hidden sm:inline">Light</span>}
        </span>

        <span className="relative z-10 flex min-w-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
          <MoonStar className={`h-4 w-4 transition-colors duration-300 ${isDark ? 'text-white' : 'text-muted'}`} />
          {!compact && <span className="hidden sm:inline">Dark</span>}
        </span>
      </span>

      {!compact && (
        <span className="flex min-w-0 flex-col pr-1">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-muted">
            {activeThemeLabel}
          </span>
          <span className="truncate text-xs text-muted">
            {systemLabel}
          </span>
        </span>
      )}
    </button>
  );
}