import React, { useState } from 'react';
import { createContext } from "react";

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [userInfo, setUserInfo] = useState({ name: "saurabh", last: 'singh' });

  const valueToProvide = {
    userInfo,
    setUserInfo
  }
  return (
    <GlobalContext.Provider value={valueToProvide}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalContext;
export { GlobalProvider };