import React from 'react'
import useGlobalContext from '../../../hooks/useGlobalContex';
import HamIcon from './../../../assets/icon/hamburgerIcon.svg';

function Navbar({ navHeight = 'auto' }) {
  const { sidebarStatus, setSidebarStatus, hamburgerVisibleStatus } = useGlobalContext();

  function handleHamMenu(e) {
    setSidebarStatus(!sidebarStatus);
  }
  const handleMainScreen = (e) => {
    e.stopPropagation();
    console.log(e.target);
    setSidebarStatus(false);
  }
  function displayHamAndOverlay() {
    console.log(hamburgerVisibleStatus, sidebarStatus);
    if(hamburgerVisibleStatus && sidebarStatus) {
      return (
        <>
          <img src={HamIcon} alt='hamburger icon' />
          <button onClick={handleHamMenu}> 
            <img src={HamIcon} alt='hamburger icon' />
          </button>
          <div style={{ backdropFilter: 'saturate(180%) blur(10px)' }} onClick={handleMainScreen} className='w-screen h-screen opacity-80 bg-gray-900 absolute z-39 top-0 left-0'></div>
        </>
      )
    } else if(hamburgerVisibleStatus) {
      return <button className='w-[30px] cursor-pointer' onClick={handleHamMenu}><img src={HamIcon} alt='hamburger icon' /></button> 
    }
  }

  console.log("Nav renderred");
  return (
    <div style={{ height: `${navHeight}`, boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }} className='p-2 overflow-hidden'>
      {displayHamAndOverlay()}  
    </div>
  )
}

export default Navbar