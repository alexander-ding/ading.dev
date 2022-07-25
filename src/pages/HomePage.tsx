import { Link } from 'react-router-dom'
import { getGreeting } from '../utils'

export default function HomePage() {
  const greeting = getGreeting()
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
          I'm an undergrad studying Computer Science at{' '}
          <a target='_blank' href='https://www.brown.edu/'>
            Brown University
          </a>{' '}
          who enjoys tackling complex engineering problems and creating
          accessible tools to empower others. Go check out some of my{' '}
          <Link to='/projects'>projects</Link>!
        </p>
        <p>
          This summer, I interned at{' '}
          <a
            target='_blank'
            href='https://www.bloomberg.com/company/what-we-do/'
          >
            Bloomberg
          </a>{' '}
          to build{' '}
          <a target='_blank' href='https://kubernetes.io/'>
            Kubernetes
          </a>
          -native tooling for workflow orchestration, designing and implementing
          solutions for cross-cluster authentication, IO, and containerization
          in{' '}
          <a target='_blank' href='https://go.dev/'>
            Go
          </a>
          . Previously, I've worked at{' '}
          <a target='_blank' href='https://votingsmarter.org/'>
            VotingSmarter
          </a>
          ,{' '}
          <a target='_blank' href='https://laiye.com/en/'>
            Laiye
          </a>
          , and as a freelancer via{' '}
          <a target='_blank' href='https://studev.org/'>
            StuDev
          </a>
          .
        </p>
        <p>
          As the Projects Director at{' '}
          <a target='_blank' href='https://www.fullstackatbrown.com/about'>
            Full Stack at Brown
          </a>
          , I coordinate 30+ project teams and directly manage several high
          impact products, such as{' '}
          <a target='_blank' href='https://hours.cs.brown.edu/'>
            Hours
          </a>
          , Brown CS's TA hours platform, and{' '}
          <a target='_blank' href='https://thecriticalreview.org/'>
            The Critical Review
          </a>
          , Brown's official course review website. I'm also the Head TA for{' '}
          <a target='_blank' href='https://cs.brown.edu/courses/csci1650/'>
            CSCI 1650: Software Security and Exploitation
          </a>
          , where you learn to hack the stack.
        </p>
        <p>
          Besides developing software, I do research in body-aware generative
          models through{' '}
          <a target='_blank' href='https://visual.cs.brown.edu/'>
            Brown Visual Computing
          </a>
          . Before that, I worked on specializing object segmentation and image
          classification techniques to biomedical applications. You can read
          more about my research in my <Link to='/research'>publications</Link>.
        </p>
        <p>
          Outside of work, I'm a big time classical music nerd and play the
          cello. I also run an{' '}
          <a target='_blank' href='https://www.instagram.com/dingsdinner/'>
            Instagram food account
          </a>{' '}
          to document my dining and cooking adventures.
        </p>
      </div>
      <hr className='w-10' />
      <footer>
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
          </a>
          .
        </p>
      </footer>
    </div>
  )
}
