import './index.css'

import { useCallback } from 'preact/hooks'
import { Link, NavLink } from 'react-router-dom'

import useColorScheme, { ColorScheme } from '../../hooks/useColorScheme'
import usePartyMode from '../../hooks/usePartyMode'
import useShouldToggleBack from '../../hooks/useShouldToggleBack'
import Background from '../Background'
import Party from '../Party'

export function Navbar() {
  const [colorScheme, setColorScheme] = useColorScheme()
  const [partyMode, setPartyMode] = usePartyMode()
  const [shouldToggleBack, setShouldToggleBack] = useShouldToggleBack()

  const toggleTheme = useCallback(() => {
    if (colorScheme === ColorScheme.Dark) {
      setColorScheme(ColorScheme.Light)
    } else {
      setColorScheme(ColorScheme.Dark)
    }
  }, [colorScheme, setColorScheme])

  const leavePartyMode = useCallback(() => {
    if (partyMode && shouldToggleBack) {
      setColorScheme(ColorScheme.Light)
      setShouldToggleBack(false)
    }
    setPartyMode(!partyMode)
  }, [
    shouldToggleBack,
    setShouldToggleBack,
    setColorScheme,
    partyMode,
    setPartyMode,
  ])

  return (
    <header className='text-gray-700 dark:text-gray-200'>
      {partyMode ? <Party /> : <Background />}
      {partyMode ? null : (
        <Link
          to='/'
          className='w-8 h-8 fixed lt-lg:absolute m-6 select-none outline-none'
        >
          {colorScheme === ColorScheme.Light ? (
            <img width='32' height='32' src='/assets/logo.svg' />
          ) : (
            <img width='32' height='32' src='/assets/logo-white.svg' />
          )}
        </Link>
      )}
      <nav className='nav'>
        <div className='spacer' />
        <div className='right'>
          {partyMode ? (
            <a title='Leave party mode' onClick={leavePartyMode}>
              Leave Party Mode
            </a>
          ) : (
            <>
              <NavLink title='Projects' to='/projects'>
                <span className='lt-sm:display-none'>Projects </span>
                <i className='i-ri-tools-line' />
              </NavLink>
              <NavLink title='Research' to='/research'>
                <span className='lt-sm:display-none'>Research </span>
                <i className='i-ri-flask-line' />
              </NavLink>
              <a title='Résumé' href='/resume.pdf'>
                <span className='lt-sm:display-none'>Résumé </span>
                <i class='i-ri-article-line' />
              </a>
              <a
                title='GitHub'
                target='_blank'
                href='https://github.com/alexander-ding'
              >
                <i className='i-ri-github-line' />
              </a>
              <a
                title='LinkedIn'
                target='_blank'
                href='https://www.linkedin.com/in/alexander-j-ding/'
              >
                <i className='i-ri-linkedin-box-line' />
              </a>

              <a
                title='Toggle theme'
                className={'select-none' + (partyMode ? ' cursor-none!' : '')}
                onClick={toggleTheme}
              >
                <i
                  className={
                    partyMode
                      ? 'i-ri-moon-fill'
                      : colorScheme === ColorScheme.Light
                      ? 'i-ri-sun-line'
                      : 'i-ri-moon-line'
                  }
                />
              </a>
            </>
          )}
        </div>
      </nav>
    </header>
  )
}
