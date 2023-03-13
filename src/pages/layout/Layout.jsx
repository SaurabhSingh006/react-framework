import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'

const layoutConfig = {
  sidebarWidth: '220px',
  sidebarColor: 'pink',
  navHeight: '3rem'
}

function Layout() {
  return (
    <div className='flex h-screen w-screen overflow-hidden'>
      <Sidebar {...layoutConfig}/>
      <div className='w-screen' style={{ backgroundColor: 'red' }}>
        <Navbar {...layoutConfig} />
      </div>
    </div>
  )
}

export default Layout