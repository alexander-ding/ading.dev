import { createSharedState } from 'preact-shared-state-hook'

const [partyMode, setPartyMode] = createSharedState(false)

function usePartyMode(): [boolean, (_: boolean) => void] {
  return [partyMode(), setPartyMode]
}

export default usePartyMode
