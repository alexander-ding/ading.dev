import { FC, useState } from 'preact/compat'
import { SlideDown } from 'react-slidedown'
import 'react-slidedown/lib/slidedown.css'
import './index.css'
const myName = 'Alex Ding'

interface AuthorsProps {
  authors: string[]
}
const Authors: FC<AuthorsProps> = ({ authors }) => {
  const createAuthor = (author: string, i: number) => {
    if (i == authors.length - 1) {
      return author == myName ? <b>{author}</b> : author
    }
    return author == myName ? (
      <>
        <b>{author}</b>,{' '}
      </>
    ) : (
      `${author}, `
    )
  }
  return <span className='block'>{authors.map(createAuthor)}</span>
}

interface LinksProps {
  links: Link[]
}
const Links: FC<LinksProps> = ({ links }) => {
  const createLink = (link: Link, i: number) => {
    const component = (
      <a target='_blank' href={link.url}>
        {link.name}
      </a>
    )
    return i !== links.length - 1 ? <>{component} | </> : component
  }
  return <div className='mt-1'>{links.map(createLink)}</div>
}

export interface PublicationProps {
  title: string
  authors: string[]
  venue: string
  inReview: boolean
  abstract: string
  links: Link[]
}

interface Link {
  url: string
  name: string
}

/**
 * Write a short description of this component here...
 */
const Publication: FC<PublicationProps> = ({
  title,
  authors,
  venue,
  inReview,
  abstract,
  links,
}) => {
  const [showAbstract, setShowAbstract] = useState(false)
  return (
    <div className='publication'>
      <div onClick={() => setShowAbstract(!showAbstract)}>
        <h3 className='lh-tight! mt-0!'>{title}</h3>
        <Authors authors={authors} />
        <span>
          {venue}
          {inReview ? (
            <>
              {'. '}
              <i>In Review</i>
            </>
          ) : null}
        </span>
      </div>
      <SlideDown>
        {showAbstract ? <p className='abstract'>{abstract}</p> : null}
      </SlideDown>

      <Links links={links} />
    </div>
  )
}

export default Publication
