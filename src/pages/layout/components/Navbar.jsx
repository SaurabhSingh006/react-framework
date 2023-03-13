import React from 'react'
import useGlobalContext from '../../../hooks/useGlobalContex';

function Navbar({ navHeight = 'auto' }) {
  const { sidebarStatus, setSidebarStatus, hamburgerVisibleStatus } = useGlobalContext();

  function handleHamMenu(e) {
    setSidebarStatus(!sidebarStatus);
    console.log("ham button clicked", e, sidebarStatus);
  }
  const handleMainScreen = (e) => {
    e.stopPropagation();
    console.log(e.target);
    setSidebarStatus(false);
  }
  function displayHamAndOverlay() {
    if(hamburgerVisibleStatus && sidebarStatus) {
      return (
        <>
          <button onClick={handleHamMenu}>ham</button>
          <div onClick={handleMainScreen} className='w-screen h-screen bg-gray-600 absolute z-500 top-0'>s</div>
        </>
      )
    } else if(hamburgerVisibleStatus) {
      return <button onClick={handleHamMenu}>ham</button> 
    }
  }

  console.log("Nav renderred");
  return (
    <div style={{ height: `${navHeight}` }} className='overflow-hidden'>
      Navbar 
       {displayHamAndOverlay()}

       <div onClick={(e) => console.log(e)}>sddddddddddddddddddd</div>

      
    </div>
  )
}

export default Navbar