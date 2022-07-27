import { useCallback } from 'preact/hooks'
import { Link, NavLink } from 'react-router-dom'
import useColorScheme, { ColorScheme } from '../../hooks/useColorScheme'
import usePartyMode from '../../hooks/usePartyMode'
import Background from '../Background'
import './index.css'

export function Navbar() {
  const [colorScheme, setColorScheme] = useColorScheme()
  const [partyMode] = usePartyMode()

  const toggleTheme = useCallback(() => {
    if (partyMode) {
      return
    }
    if (colorScheme === ColorScheme.Dark) {
      setColorScheme(ColorScheme.Light)
    } else {
      setColorScheme(ColorScheme.Dark)
    }
  }, [partyMode, colorScheme, setColorScheme])

  return (
    <header className='text-gray-700 dark:text-gray-200'>
      <Background />
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
            title='Toggle theme'
            className={'select-none' + (partyMode ? ' cursor-none!' : '')}
            onClick={toggleTheme}
          >
            <i
              className={
                partyMode
                  ? 'ri-moon-fill'
                  : colorScheme === ColorScheme.Light
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
