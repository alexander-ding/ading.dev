import { render } from 'preact'
import { App } from './app'

import 'nprogress/nprogress.css'
import './index.css'
import 'uno.css'
import 'remixicon/fonts/remixicon.css'

render(<App />, document.getElementById('app') as HTMLElement)
