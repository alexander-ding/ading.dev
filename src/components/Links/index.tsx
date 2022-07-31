import { FC } from 'preact/compat'
export interface Link {
  url: string
  name: string
}

export interface LinksProps {
  links: Link[]
  style?: React.CSSProperties
}
const Links: FC<LinksProps> = ({ links, style }) => {
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
