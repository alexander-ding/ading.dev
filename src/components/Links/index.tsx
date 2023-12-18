import { FunctionalComponent } from 'preact'
export interface Link {
  url: string
  name: string
}

export interface LinksProps {
  links: Link[]
  style?: React.CSSProperties
}
const Links: FunctionalComponent<LinksProps> = ({ links, style }) => {
  const createLink = (link: Link, i: number) => {
    const component = (
      <a target='_blank' href={link.url}>
        {link.name}
      </a>
    )
    return i !== links.length - 1 ? <>{component} | </> : component
  }
  return (
    <div className='mt-1' style={style}>
      {links.map(createLink)}
    </div>
  )
}

export default Links
