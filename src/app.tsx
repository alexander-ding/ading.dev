import { lazy, Suspense } from 'preact/compat'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LazyLoad from './components/LazyLoad'
import ProjectsPage from './pages/ProjectsPage'
import ResearchPage from './pages/ResearchPage'
import WithNavbar from './pages/WithNavbar'

const HomePage = lazy(() => import('./pages/HomePage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WithNavbar />}>
          <Route
            path='/'
            element={
              <Suspense fallback={<LazyLoad />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path='/projects'
            element={
              <Suspense fallback={<LazyLoad />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path='/research'
            element={
              <Suspense fallback={<LazyLoad />}>
                <ResearchPage />
              </Suspense>
            }
          />
          <Route
            path='*'
            element={
              <Suspense fallback={<LazyLoad />}>
                <NotFoundPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
