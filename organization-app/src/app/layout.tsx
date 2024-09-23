'use client'

import React from 'react'

import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/lightTheme';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={lightTheme}>

          <GlobalStyle />
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  )
}
