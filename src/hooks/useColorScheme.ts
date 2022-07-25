import { useCallback, useState } from 'preact/hooks'

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

const colorSchemeStorageName = 'ading-color-scheme'

// not really a hook lol
function useColorScheme(): [ColorScheme, (c: ColorScheme) => void] {
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  const settings = localStorage.getItem(colorSchemeStorageName) || 'auto'
  const initialScheme =
    settings === ColorScheme.Dark ||
    (prefersDark && settings !== ColorScheme.Light)
      ? ColorScheme.Dark
      : ColorScheme.Light
  const [scheme, setScheme] = useState(initialScheme)

  const updateScheme = useCallback(
    (newScheme: ColorScheme) => {
      setScheme(newScheme)
      localStorage.setItem(colorSchemeStorageName, newScheme)
      document.documentElement.classList.toggle(
        'dark',
        newScheme === ColorScheme.Dark ? true : false,
      )
    },
    [setScheme],
  )

  return [scheme, updateScheme]
}

export default useColorScheme
