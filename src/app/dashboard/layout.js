"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { GlobalContext } from "@/context";
import { useContext } from "react";

function layout({ children }) {
  const { sidebar, setSidebar, showModal } = useContext(GlobalContext);
  const handleNav = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="flex h-screen">
      {
        !sidebar ? null : <div className="opacity-25 fixed inset-0 z-40 bg-black lg:bg-transparent"></div>
      }
      <div className="lg:flex-1 z-[99] ">
        <Sidebar />
      </div>
      <div className=" flex-[4] flex-col overflow-x-hidden overflow-y-auto">
        <Navbar />
        <main>
          <div>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default layout;
