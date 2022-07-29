import { createSharedState } from 'preact-shared-state-hook'

const [shouldToggleBack, setShouldToggleBack] = createSharedState(false)

function useShouldToggleBack(): [boolean, (_: boolean) => void] {
  return [shouldToggleBack(), setShouldToggleBack]
}

export default useShouldToggleBack
