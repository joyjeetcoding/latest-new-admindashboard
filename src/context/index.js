"use client";

import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import { HashLoader } from "react-spinners";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [sidebar, setSidebar] = useState(true);
  const [pageLevelLoader, setPageLoader] = useState(false);
  const [componentLevelLoader, setComponentLevelLoader] = useState(false);
  const [loader, setLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setSidebar(!sidebar);
  };
  
  const {status} = useSession();
  const pathName = usePathname();

  useEffect(() => {
    
    
    if(status === "loading") {
      setLoader(true);
    }
    if(status === "unauthenticated")
      setLoader(false);
    if(status === "authenticated")
    setLoader(false);
  }, [status])

  if(loader) {
    return (
      <div className="w-full h-screen flex justify-center items-center absolute">
        <HashLoader
        color="#36d7b7"
        loading={loader}
        size={45}
        data-textid="Loader"
        />
      </div>
    )
  }

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
    setShowModal(false);
    router.push("/dashboard/products")
    router.refresh();
  }

  function handleCrossonVisitor (){
    setShowModal(false);
    router.push("/dashboard/users")
    router.refresh();
  }

  return (
    <GlobalContext.Provider value={{ handleCrossonVisitor, handleCrossonProduct, sidebar, setSidebar, handleNav, pageLevelLoader, setPageLoader, componentLevelLoader, setComponentLevelLoader, handleNewVisitor, handleNewProduct, showModal, setShowModal }}>
      {children}
    </GlobalContext.Provider>
  );
}
