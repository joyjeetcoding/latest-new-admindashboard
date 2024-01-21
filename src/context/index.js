"use client";

import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [pageLevelLoader, setPageLoader] = useState(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setSidebar(!sidebar);
  };
  
  const handleNew = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    router.push("/dashboard/users/addvisitor");
  }

  function handleCross (){
    setShowModal(!showModal);
    router.push("/dashboard/users")
    router.refresh();
  }

  return (
    <GlobalContext.Provider value={{ handleCross, sidebar, setSidebar, handleNav, pageLevelLoader, setPageLoader, componentLevelLoader, setComponentLevelLoader, handleNew,showModal, setShowModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
