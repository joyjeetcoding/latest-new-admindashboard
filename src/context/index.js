"use client";

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [pageLevelLoader, setPageLoader] = useState(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState(false);

  const handleNav = () => {
    setSidebar(!sidebar);
  };

  return (
    <GlobalContext.Provider value={{ sidebar, setSidebar, handleNav, pageLevelLoader, setPageLoader, componentLevelLoader, setComponentLevelLoader }}>
      {children}
    </GlobalContext.Provider>
  );
}
