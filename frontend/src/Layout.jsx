import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = () => {
  const location = useLocation()
  const hideLayout = location.pathname === '/login' || location.pathname === '/signup'

  if (hideLayout) {
    return <Outlet />
  }

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
