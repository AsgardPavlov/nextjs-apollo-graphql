'use client'

import { ThemeProvider } from 'next-themes'
import { NextUIProvider } from '@nextui-org/react'

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute='class'
      themes={['light', 'dark']}
      defaultTheme='dark'
    >
      {children}
    </ThemeProvider>
  )
}

export default Providers
