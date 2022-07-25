import { FC, useEffect } from 'preact/compat'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const WithNavbar: FC = () => {
  const location = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
  return (
    <>
      <Navbar />
      <main className='px-7 py-8'>
        <Outlet />
      </main>
    </>
  )
}

export default WithNavbar
