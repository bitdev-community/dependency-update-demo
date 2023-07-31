import React, { useState } from 'react';
import { lightTheme } from '@showoff/design.theme.light-theme';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ThemeToggle } from './theme-toggle';

export const BasicThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <ThemeProvider
      theme={lightTheme()}
    >
      <ThemeToggle
        isDark={isDark}
        onClick={() => setIsDark(!isDark)} />
    </ThemeProvider>
  );
}
