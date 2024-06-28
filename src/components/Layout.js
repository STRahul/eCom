
import Header from './Header'
import CatNav from './CatNav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
       <Header />
       <CatNav />
       <Outlet />
    </div>
  )
}

export default Layout
