import { render } from 'preact'
import { App } from './app'

import 'nprogress/nprogress.css'
import 'uno.css'
import './index.css'

render(<App />, document.getElementById('app') as HTMLElement)
