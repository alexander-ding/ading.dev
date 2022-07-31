import { FC } from 'preact/compat'
import Links, { Link } from '../Links'
import ManagedTag from '../ManagedTag'
import './index.css'

export interface ProjectProps {
  /** Lorem ipsum dolor sit anem... */
  title: string
  description: string
  links: Link[]
  isManaged?: boolean
}

/**
 * Write a short description of this component here...
 */
const Project: FC<ProjectProps> = ({
  title,
  description,
  links,
  isManaged,
}) => {
  return (
    <a className='project'>
      <h3 className='align-mid text'>
        {title}
        {isManaged ? (
          <>
            {' '}
            <ManagedTag />
          </>
        ) : null}
      </h3>
      <p className='description'>{description}</p>
      <Links
        links={links}
        style={{
          fontSize: '0.9em',
          marginTop: 'auto',
        }}
      />
    </a>
  )
}

export default Project
