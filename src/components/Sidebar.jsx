"use client"
import {
  MdOutlineSpaceDashboard,
  MdOutlineProductionQuantityLimits,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

const menuItems = [
  {
    id: 1,
    label: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineSpaceDashboard size={25} />,
  },
  {
    id: 2,
    label: "Products",
    path: "/dashboard/products",
    icon: <MdOutlineProductionQuantityLimits size={25} />,
  },
  {
    id: 3,
    label: "Users",
    path: "/dashboard/users",
    icon: <MdPeople size={25} />,
  },
];

function Sidebar() {
  const [nav, setNav] = useState(false);
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  }

  const hanldeNavigate = (menuItem) => {
    router.push(menuItem.path)
  }

  return (
    <div className="font-fontInput relative ">
      {
        !nav ? <GiHamburgerMenu onClick={handleNav} className="cursor-pointer lg:hidden" size={40} /> : <IoMdClose size={40} onClick={handleNav} className="cursor-pointer lg:hidden" />
      }
        <h1 className="font-heading font-extrabold text-center text-xl md:text-2xl lg:text-3xl p-5">ADMINOX</h1>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 flex justify-center items-center flex-col">
        <div className="p-2">
          <ul className="flex flex-col gap-7">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} className="w-full text-sm sm:text-lg md:text-2xl">
                <label onClick={() => hanldeNavigate(menuItem)} className={`relative flex gap-2 cursor-pointer hover:bg-green-700 p-2 px-4  rounded-md hover:text-white duration-500 ease-in-out`}>
                  {menuItem.icon}
                  {menuItem.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-4 w-full text-sm sm:text-lg md:text-2xl p-3 px-4 hover:bg-green-700 rounded-md hover:text-white duration-500 ease-in-out">
          <MdLogout size={25} />
          <button className="">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
