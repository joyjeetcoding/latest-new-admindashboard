"use client";

import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [isAuthUser, setisAuthUser] = useState(null);
  const [user, setUser] = useState(null);
  const [sidebar, setSidebar] = useState(null);

  // we are creating this to ensure that everytime we will login to the dashboard isAuthUser should be true

  useEffect(() => {
    console.log(Cookies.get("token"));
    if (Cookies.get("token") !== undefined) {
      setisAuthUser(true);
      const userData = JSON.parse(localStorage.getItem("user") || {});
      setUser(userData)
    }
    else {
      setisAuthUser(false);
    }
  }, [Cookies]);

  return (
    <GlobalContext.Provider
      value={{ isAuthUser, setisAuthUser, user, setUser }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
