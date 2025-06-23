"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// Let TypeScript infer the prop types from the real component
export function ThemeProvider(props: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />
}
