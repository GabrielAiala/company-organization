'use client'

import React from 'react'

import StyledComponentsRegistry from '../lib/registry';
import GlobalStyle from '../theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme/lightTheme';
import ApolloProviderWrapper from '@/lib/apolloWraper';

//TODO trocar a font

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={lightTheme}>
          <ApolloProviderWrapper>
            <GlobalStyle />
            <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
          </ApolloProviderWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
