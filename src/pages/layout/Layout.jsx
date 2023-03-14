import React from 'react'
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
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar {...layoutConfig}/>
      <div className='w-screen relative'>
        <Navbar {...layoutConfig} />

        <img className='bg-red-600' src="https://img.freepik.com/free-vector/hand-drawn-flat-groovy-psychedelic-background_23-2149074391.jpg" alt="" />
      </div>
    </div>
  )
}

export default Layout