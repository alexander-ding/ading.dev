import { signal } from '@preact/signals'
import { useCallback } from 'preact/hooks'
const partyMode = signal(false)

function usePartyMode(): [boolean, (_: boolean) => void] {
  const setPartyMode = useCallback(
    (newPartyMode: boolean) => {
      partyMode.value = newPartyMode
    },
    [partyMode],
  )
  return [partyMode.value, setPartyMode]
}

export default usePartyMode
