import { lazy } from 'preact/compat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import WithLayout from './pages/WithLayout'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ResearchPage = lazy(() => import('./pages/ResearchPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WithLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/research' element={<ResearchPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
