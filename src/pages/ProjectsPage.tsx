import Footer from '../components/Footer'
import ManagedTag from '../components/ManagedTag'
import Project from '../components/Project'
import { PROJECTS } from '../utils/data'

export default function ProjectsPage() {
  return (
    <div className='prose m-auto'>
      <h1>Projects</h1>
      <p>
        Here's a curated list of projects I'm involved with. Some of them are
        full on public-facing services. Some of them are school projects I'm
        proud of. Some of them are just an excuse for me to explore a new
        technology. Regardless, I try to package them in a shareable way, and I
        hope you can have some fun poking around.
      </p>
      <p>
        I am a primary author of most projects listed here, but there are a few
        that I've managed teams for but didn't build from scratch, which I've
        marked with <ManagedTag />.
      </p>
      <div
        style={{
          display: 'grid',
          gap: '0.5rem',
          gridTemplateColumns: 'repeat(auto-fit, minmax(288px, 1fr))',
        }}
      >
        {PROJECTS.map((project) => (
          <Project {...project} />
        ))}
      </div>

      <Footer />
    </div>
  )
}
