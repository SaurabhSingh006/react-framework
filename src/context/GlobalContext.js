import React, { useState } from 'react';
import { createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ name: "saurabh", last: 'singh' });

  // LAYOUT STATE
  const [sidebarStatus, setSidebarStatus] = useState(false);
  const [hamburgerVisibleStatus, setHamburgerVisibleStatus] = useState(false);

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