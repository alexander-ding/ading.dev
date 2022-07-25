import nProgress from 'nprogress'
import { FC, useEffect } from 'preact/compat'

const LazyLoad: FC = () => {
  useEffect(() => {
    nProgress.start()

    return () => {
      nProgress.done()
    }
  })

  return null
}

export default LazyLoad
