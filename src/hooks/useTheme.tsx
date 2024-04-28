import { useEffect, useState } from 'react'

const THEME_OPTION = {
  DARK: 'dark',
  LIGHT: 'light',
  SYSTEM: 'system'
} as const

type ThemeOption = (typeof THEME_OPTION)[keyof typeof THEME_OPTION]

export function useTheme() {
  const [theme, setTheme] = useState<ThemeOption>(() => {
    const selectedTheme = localStorage.getItem('theme')

    if (selectedTheme) {
      return selectedTheme === THEME_OPTION.DARK ? THEME_OPTION.DARK : THEME_OPTION.LIGHT
    }

    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('theme', 'dark')
      return THEME_OPTION.DARK
    }

    localStorage.setItem('theme', 'light')
    return THEME_OPTION.LIGHT
  })

  useEffect(() => {
    if (theme === THEME_OPTION.DARK) {
      document.querySelector('html')?.classList.add(THEME_OPTION.DARK)
      localStorage.setItem('theme', 'dark')
    } else {
      document.querySelector('html')?.classList.remove(THEME_OPTION.DARK)
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const handleThemeChange = () => {
    setTheme(prevTheme =>
      prevTheme === THEME_OPTION.LIGHT ? THEME_OPTION.DARK : THEME_OPTION.LIGHT
    )
  }

  return { theme, handleThemeChange }
}
