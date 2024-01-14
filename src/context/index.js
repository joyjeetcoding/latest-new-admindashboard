"use client";

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sidebar, setSidebar] = useState(true);


  return (
    <GlobalContext.Provider
      value={{ sidebar, setSidebar }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
