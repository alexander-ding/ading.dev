import { useCallback } from 'preact/hooks'
import { Link } from 'react-router-dom'

import Footer from '../components/Footer'
import useColorScheme, { ColorScheme } from '../hooks/useColorScheme'
import usePartyMode from '../hooks/usePartyMode'
import useShouldToggleBack from '../hooks/useShouldToggleBack'
import { getGreeting } from '../utils'

export default function HomePage() {
  const greeting = getGreeting()
  const [partyMode, setPartyMode] = usePartyMode()
  const [colorScheme, setColorScheme] = useColorScheme()
  const [shouldToggleBack, setShouldToggleBack] = useShouldToggleBack()

  const togglePartyMode = useCallback(() => {
    if (!partyMode && colorScheme === ColorScheme.Light) {
      setColorScheme(ColorScheme.Dark)
      setShouldToggleBack(true)
    } else if (partyMode && shouldToggleBack) {
      setColorScheme(ColorScheme.Light)
      setShouldToggleBack(false)
    }
    setPartyMode(!partyMode)
  }, [
    shouldToggleBack,
    setShouldToggleBack,
    colorScheme,
    setColorScheme,
    partyMode,
    setPartyMode,
  ])
  return (
    <div className='prose m-auto'>
      <h1>
        <span className='text-size-0.5em font-500'>{greeting}! My name is</span>
        <div className='pt-2 lt-sm:text-size-0.75em'>
          <div>Alex Ding.</div>
          <div>I'm a student developer.</div>
        </div>
      </h1>
      <div>
        <p>
          I'm an undergrad pursuing a four-year concurrent ScB and ScM in
          Computer Science at{' '}
          <a target='_blank' href='https://www.brown.edu/'>
            Brown University
          </a>
          . This summer, I am interning at{' '}
          <a target='_blank' href='https://www.janestreet.com/'>
            Jane Street
          </a>{' '}
          as a software engineer intern. Before this, I interned at{' '}
          <a
            target='_blank'
            href='https://www.bloomberg.com/company/what-we-do/'
          >
            Bloomberg
          </a>{' '}
          last summer and took the fall semester off to intern at{' '}
          <a target='_blank' href='https://about.google/'>
            Google
          </a>
          .
        </p>
        <p>
          At school, I was the Projects Director at{' '}
          <a target='_blank' href='https://www.fullstackatbrown.com/about'>
            Full Stack at Brown
          </a>
          , where I coordinated 30+ project teams and directly manage several
          high impact products, such as{' '}
          <a target='_blank' href='https://hours.cs.brown.edu/'>
            Hours
          </a>
          , Brown CS's TA hours platform, and{' '}
          <a target='_blank' href='https://thecriticalreview.org/'>
            The Critical Review
          </a>
          , Brown's official course review website. I was also a Head TA for{' '}
          <a target='_blank' href='https://cs.brown.edu/courses/csci1951-a/'>
            CSCI 1951A: Data Science
          </a>
          .
        </p>
        <p>
          Besides software engineering, I did research in body-aware generative
          models through{' '}
          <a target='_blank' href='https://visual.cs.brown.edu/'>
            Brown Visual Computing
          </a>{' '}
          and worked on specializing object segmentation and image
          classification techniques to biomedical applications. You can read
          more about my research in my{' '}
          <Link disabled={partyMode} to='/research'>
            publications
          </Link>
          .
        </p>
        <p>
          Outside of work, I'm a big time classical music nerd and play the
          cello. I also run an{' '}
          <a target='_blank' href='https://www.instagram.com/dingsdinner/'>
            Instagram food account
          </a>{' '}
          to document my dining and cooking adventures, all while playing{' '}
          <a target='_blank' href='https://na.op.gg/summoners/na/IAGDL'>
            a little too much
          </a>{' '}
          League of Legends for my own good.
        </p>
      </div>
      <hr className='w-10' />
      <p>
        Since I get a lot of questions about internships, I made a{' '}
        <a
          target='_blank'
          href='https://docs.google.com/presentation/d/1nbQkDGQocNkraIK7_MhAcV_-3zrkAwgpfZxDWWD9tak/edit?usp=sharing'
        >
          slide deck
        </a>{' '}
        sharing detailed tips for each step of the SWE internship application
        process. If you still have questions after reading the slides, reach out
        to me. I'm happy to chat.
      </p>
      <hr className='w-10' />
      <div>
        <p>
          Find me on{' '}
          <a target='_blank' href='https://github.com/alexander-ding'>
            GitHub
          </a>{' '}
          and{' '}
          <a href='https://www.linkedin.com/in/alexander-j-ding/'>LinkedIn</a>,
          or shoot me an email at{' '}
          <a
            href='mailto:alexander_ding@brown.edu'
            title='Yes, I snatched that email alias as soon as I can'
            target='_blank'
          >
            ding@brown.edu
          </a>{' '}
          <a
            title={"Hey! What's this thing?"}
            role='button'
            className='border-b-hidden! cursor-pointer'
            onClick={togglePartyMode}
          >
            <i
              className={
                'vertical' +
                (partyMode
                  ? ' i-ri-emotion-laugh-fill'
                  : ' i-ri-emotion-laugh-line')
              }
            />
          </a>
        </p>
      </div>

      <Footer />
    </div>
  )
}
