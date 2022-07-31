import Footer from '../components/Footer'
import Publication from '../components/Publication'
import { PUBLICATIONS } from '../utils/data'

export default function ResearchPage() {
  return (
    <div className='prose m-auto'>
      <h1>Research</h1>
      <p>
        I am affiliated with a number of research groups. Most recently, I'm at{' '}
        <a target='_blank' href='https://visual.cs.brown.edu/'>
          Brown Visual Computing
        </a>
        , where I researched how to create body-aware generative models with
        Bryce Blinn and Professor{' '}
        <a target='_blank' href='https://dritchie.github.io/'>
          Daniel Ritchie
        </a>
        . Before this, I worked with Professor{' '}
        <a target='_blank' href='https://www.cs.uml.edu/~bliu/index.html'>
          Benyuan Liu
        </a>{' '}
        at{' '}
        <a target='_blank' href='https://www.uml.edu/'>
          The University of Massachusetts Lowell
        </a>{' '}
        to specialize state-of-the-art deep learning methods to automate
        biomedical procedures, such as disease diagnosis and endoscope video
        processing.
      </p>
      <p>
        Feel free to check out my papers! You can click on each paper's title to
        open its abstract.
      </p>
      <h2>Publications</h2>
      <div>
        {PUBLICATIONS.map((publication) => (
          <Publication {...publication} />
        ))}
      </div>
      <Footer />
    </div>
  )
}
