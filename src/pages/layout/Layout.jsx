import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const layoutConfig = {
  sidebarWidth: '260px',
  // sidebarColor: 'pink',
  navHeight: '3rem'
}

function Layout() {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar {...layoutConfig}/>
      <div className='w-screen relative'>
        <Navbar {...layoutConfig} />
      </div>
    </div>
  )
}

export default Layout