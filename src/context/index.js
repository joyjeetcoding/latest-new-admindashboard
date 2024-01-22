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
  
  const handleNewVisitor = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    router.push("/dashboard/users/addvisitor");
  }

  const handleNewProduct = (e) => {
    e.preventDefault();
    setShowModal(!showModal);
    router.push("/dashboard/products/addproduct");
  }

  function handleCrossonProduct (){
    setShowModal(!showModal);
    router.push("/dashboard/products")
    router.refresh();
  }

  function handleCrossonVisitor (){
    setShowModal(!showModal);
    router.push("/dashboard/users")
    router.refresh();
  }

  return (
    <GlobalContext.Provider value={{ handleCrossonVisitor, handleCrossonProduct, sidebar, setSidebar, handleNav, pageLevelLoader, setPageLoader, componentLevelLoader, setComponentLevelLoader, handleNewVisitor, handleNewProduct, showModal, setShowModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
