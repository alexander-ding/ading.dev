import { FC } from 'preact/compat'
import urlJoin from 'url-join'

import useDocumentBodySize from '../../hooks/useDocumentBodySize'
import useWindowSize from '../../hooks/useWindowSize'

const Footer: FC = () => {
  const windowSize = useWindowSize()
  const documentSize = useDocumentBodySize()
  return (
    <footer className='mt-10 mb-6 opacity-50 flex flex-row'>
      <div className='inline-block flex-auto'>
        Last updated with commit{' '}
        <a
          target='_blank'
          href={urlJoin(
            import.meta.env.VITE_REPOSITORY_URL,
            'tree',
            import.meta.env.VITE_COMMIT_REF,
          )}
        >
          @{import.meta.env.VITE_COMMIT_REF.slice(0, 7)}
        </a>{' '}
        {import.meta.env.VITE_BUILD_TIME
          ? `on ${import.meta.env.VITE_BUILD_TIME}`
          : 'just now'}
        .
      </div>
      {documentSize.height > windowSize.height ? (
        <div className='justify-self-end self-center'>
          <a
            className='cursor-pointer flex-nowrap lt-sm:border-b-0!'
            title='Back to top'
            onClick={() => window.scroll({ top: 0, behavior: 'smooth' })}
          >
            <span
              className='lt-sm:display-none'
              style={{
                whiteSpace: 'nowrap',
              }}
            >
              Back to Top{' '}
            </span>
            <i className='i-ri-arrow-up-s-line' />
          </a>
        </div>
      ) : null}
    </footer>
  )
}

export default Footer
