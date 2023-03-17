import React, { useEffect, useState } from 'react';
import { createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ name: "saurabh", last: 'singh' });

  // LAYOUT STATE
  const [sidebarStatus, setSidebarStatus] = useState(true);
  const [hamburgerVisibleStatus, setHamburgerVisibleStatus] = useState(true);
  
  // For Getting the screen size
  useEffect(() => {
    if(window.outerWidth > 600) setHamburgerVisibleStatus(false);
    else setSidebarStatus(false);

    const listener = (e) => {
      setTimeout(() => {
        console.log(e.target.outerWidth);
        if(e.target.outerWidth > 600) {
          setHamburgerVisibleStatus(false);
          setSidebarStatus(true);
        } else {
          setHamburgerVisibleStatus(true); 
          setSidebarStatus(false);
        } 
      }, 300);
    }

    window.addEventListener('resize', listener);
  }, []);

  const valueToProvide = {
    userInfo,
    setUserInfo,

    sidebarStatus,
    hamburgerVisibleStatus,
    setSidebarStatus,
    setHamburgerVisibleStatus
  }
  return (
    <GlobalContext.Provider value={valueToProvide}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalContext;
export { GlobalProvider };