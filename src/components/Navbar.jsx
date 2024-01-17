"use client";
import { GlobalContext } from "@/context";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const { sidebar, setSidebar, handleNav } = useContext(GlobalContext);
  return (
    <div className="p-2 flex justify-center items-center font-fontInput">
      {!sidebar ? (
        <GiHamburgerMenu
          size={40}
          className="cursor-pointer lg:hidden"
          onClick={handleNav}
        />
      ) : null}

      <h1 className="text-4xl px-5">AdminDox</h1>
    </div>
  );
}

export default Navbar;
