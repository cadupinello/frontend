"use client"
import { ReactNode } from "react"
import { ThemeProvider } from "styled-components"

interface DefaultProvidersProps {
  children: ReactNode
}

interface ThemeProps {
  colors: {
    primary: string
    primaryDark: string
    secondary: string
    blackLight: string
    black: string,
    gray: string,
    grayDark: string
  }
}

const theme: ThemeProps = {
  colors: {
    primary: "#0F52BA",
    primaryDark: "#003566",
    secondary: "#fff",
    blackLight: "#2C2C2C",
    black: "#373737",
    gray: "#eee",
    grayDark: "#BFBFBF",
  },
}

const DefaultProviders = ({ children }: DefaultProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default DefaultProviders
