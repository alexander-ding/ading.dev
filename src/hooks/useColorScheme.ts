import { createSharedState } from 'preact-shared-state-hook'
import { useCallback } from 'preact/hooks'

export enum ColorScheme {
  Light = 'light',
  Dark = 'dark',
}

const colorSchemeStorageName = 'ading-color-scheme'

const prefersDark =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
const settings = localStorage.getItem(colorSchemeStorageName) || 'auto'
const initialScheme =
  settings === ColorScheme.Dark ||
  (prefersDark && settings !== ColorScheme.Light)
    ? ColorScheme.Dark
    : ColorScheme.Light
const [scheme, setScheme] = createSharedState(initialScheme)

// not really a hook lol
function useColorScheme(): [ColorScheme, (c: ColorScheme) => void] {
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
  return [scheme(), updateScheme]
}

export default useColorScheme
