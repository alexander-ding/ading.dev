import { useCallback, useState } from 'preact/hooks'
import { Link, NavLink } from 'react-router-dom'
import useColorScheme, { ColorScheme } from '../../hooks/useColorScheme'
import Party from '../Party'
import './index.css'

export function Navbar() {
  const [shouldToggleBack, setShouldToggleBack] = useState(false)
  const [colorScheme, setColorScheme] = useColorScheme()
  const [partyMode, setPartyMode] = useState(false)

  const toggleTheme = useCallback(() => {
    if (colorScheme === ColorScheme.Dark) {
      setColorScheme(ColorScheme.Light)
    } else {
      setColorScheme(ColorScheme.Dark)
    }
    setShouldToggleBack(false)
  }, [colorScheme, setColorScheme])
  const togglePartyMode = useCallback(() => {
    if (!partyMode && colorScheme === ColorScheme.Light) {
      setColorScheme(ColorScheme.Dark)
      setShouldToggleBack(true)
    }

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
      {partyMode ? <Party /> : null}
      <Link
        to='/'
        className='w-8 h-8 fixed lt-lg:absolute m-6 select-none outline-none'
      >
        {colorScheme === ColorScheme.Light ? (
          <img src='/assets/logo.svg' />
        ) : (
          <img src='/assets/logo-white.svg' />
        )}
      </Link>
      <nav className='nav'>
        <div className='spacer' />
        <div className='right'>
          <NavLink title='Projects' to='/projects'>
            <span className='lt-sm:display-none'>Projects </span>
            <i className='ri-tools-line' />
          </NavLink>
          <NavLink title='Research' to='/research'>
            <span className='lt-sm:display-none'>Research </span>
            <i className='ri-flask-line' />
          </NavLink>
          <a title='Résumé' href='/resume.pdf'>
            <span className='lt-sm:display-none'>Résumé </span>
            <i class='ri-article-line' />
          </a>
          <a title='GitHub' href='https://github.com/alexander-ding'>
            <i className='ri-github-line' />
          </a>
          <a
            title='LinkedIn'
            href='https://www.linkedin.com/in/alexander-j-ding/'
          >
            <i className='ri-linkedin-box-line' />
          </a>
          <a
            title="Hey, what's this thing?"
            role='button'
            onClick={togglePartyMode}
          >
            <i className={partyMode ? 'ri-game-fill' : 'ri-game-line'} />
          </a>
          <a title='Toggle theme' className='select-none' onClick={toggleTheme}>
            <i
              className={
                colorScheme === ColorScheme.Light
                  ? 'ri-sun-line'
                  : 'ri-moon-line'
              }
            />
          </a>
        </div>
      </nav>
    </header>
  )
}
