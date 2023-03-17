import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const layoutConfig = {
  sidebarWidth: '500px',
  msidebarWidth: '260px',
  // sidebarColor: 'pink',
  navHeight: '3rem'
}

function Layout() {
  return (
    <div className='flex flex-row h-screen w-screen overflow-hidden'>
      <Sidebar {...layoutConfig}/>
      <div className='w-screen relative overflow-x-scroll'>
        <Navbar {...layoutConfig} />
        
        <Outlet />
      </div>
    </div>
  )
}

export default Layout