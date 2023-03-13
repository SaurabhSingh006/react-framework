import React from 'react'

function Sidebar({ sidebarWidth = '200px', sidebarColor = 'white' }) {
  return (
    <div style={{ width: `${sidebarWidth}`, backgroundColor: `${sidebarColor}` }} className={`h-screen bg-black overflow-y-auto`}>
      Sidebar
    </div>
  )
}

export default Sidebar