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
    <div className="w-full h-full">
      <div className="flex">
        {!sidebar ? (
          <div className="w-1/2 md:w-[40%] lg:w-[20%] h-screen bg-green-500 text-white">
            {sidebar ? (
              <GiHamburgerMenu
                onClick={handleNav}
                className="cursor-pointer lg:hidden"
                size={40}
              />
            ) : (
              <IoMdClose
                size={40}
                onClick={handleNav}
                className="cursor-pointer lg:hidden"
              />
            )}
            <Sidebar />
          </div>
        ) : null}
        <div className="flex flex-col">
          {sidebar ? (
            <GiHamburgerMenu
              size={40}
              onClick={handleNav}
              className="cursor-pointer lg:hidden"
            />
          ) : null}
          <Navbar />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default layout;
