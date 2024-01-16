"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function layout({ children }) {
  const { sidebar, setSidebar } = useContext(GlobalContext);
  const handleNav = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className="flex h-screen">
      <div className="lg:flex-1 z-[99]">
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
