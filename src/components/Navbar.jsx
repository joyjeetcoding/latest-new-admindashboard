"use client"
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const { sidebar, setSidebar, handleNav } = useContext(GlobalContext);
  return (
    <div className="">
      {
        !sidebar ? <GiHamburgerMenu size={40} className="cursor-pointer lg:hidden" onClick={handleNav} />: null
      }
      Navbar
    </div>
  )
}

export default Navbar