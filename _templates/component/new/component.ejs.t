---
to: src/components/<%=h.changeCase.pascalCase(name)%>/index.tsx
---
import {FC} from 'preact/compat'

export interface <%=h.changeCase.pascalCase(name)%>Props {
  /** Lorem ipsum dolor sit anem... */
}

/**
 * Write a short description of this component here...
 */
const <%=h.changeCase.pascalCase(name)%>: FC<<%=h.changeCase.pascalCase(name)%>Props> = ({}) => {
  return <div></div>
}

export default <%=h.changeCase.pascalCase(name)%>
