import React, { ReactNode, useState } from 'react';
import { Box } from '@mui/material';
import { ThemeProvider } from '@showoff/design.theme.theme-provider';
import { ThemeToggle } from '@showoff/design.theme.theme-toggle';
import { darkPortfolioTheme } from '@showoff/personal-portfolio.theme.dark-portfolio-theme';
import { lightPortfolioTheme } from '@showoff/personal-portfolio.theme.light-portfolio-theme';

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */

export interface MUIPreviewContextProps {
  children: ReactNode;
  // Define additional prop types here
  customProp?: string;
}

// eslint-disable-next-line react/prop-types
// @ts-ignore
export function MUIPreviewContext({ children }: MUIPreviewContextProps) {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  return (
    <ThemeProvider
      theme={themeMode === 'dark' ? darkPortfolioTheme() : lightPortfolioTheme()}
    >
      <Box sx={{ p: 5 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ThemeToggle
            isDark={themeMode === 'dark'}
            onClick={() => setThemeMode(themeMode === 'dark' ? 'light' : 'dark')}
          />
        </Box>
        {children}
      </Box>
    </ThemeProvider>
  );
}



