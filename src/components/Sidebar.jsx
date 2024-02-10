"use client";
import {
  MdOutlineSpaceDashboard,
  MdOutlineProductionQuantityLimits,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { GlobalContext } from "@/context";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

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
    label: "Visitors",
    path: "/dashboard/users",
    icon: <MdPeople size={25} />,
  },
];

function Sidebar() {

  const router = useRouter();
  const { sidebar, setSidebar, handleNav } = useContext(GlobalContext);
  const [active, setActive] = useState(false);

  const pathname = usePathname();

  const { data: session } = useSession();


  const { status } = useSession();
  console.log(status);

  useEffect(() => {
    if(status === "unauthenticated") {
      router.push("/");
    }
  },[status])

  const hanldeNavigate = (menuItem) => {
    setActive(!active);
    handleNav();
    router.push(menuItem.path);
  };

  return (
    <div className={`absolute left-0 top-0 flex flex-col h-screen w-[50%] md:w-[35%] lg:w-[20%] bg-green-500  duration-500 ease-in-out ${!sidebar ? "-translate-x-full lg:translate-x-0" : "translate-x-0"}`}>
      {
        !sidebar ? null :
        <IoMdClose onClick={handleNav} size={40} className="text-white cursor-pointer lg:hidden" />
      }
      <div className="flex justify-center items-center">
        <Link href={"/dashboard"} className="font-logo text-white text-center text-lg sm:text-xl md:text-2xl lg:text-4xl p-5 py-7 mt-8 flex flex-col">
          WelCome <span className="font-cormorant underline font-bold italic">{session?.user?.name}</span>
        </Link>
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2  flex justify-center items-center flex-col font-fontInput">
        <nav className="p-2">
          <ul className="flex flex-col gap-7">
            {menuItems.map((menuItem) => (
              <li
                key={menuItem.id}
                className="w-full text-sm sm:text-lg md:text-2xl"
              >
                <label
                  onClick={() => hanldeNavigate(menuItem)}
                  className={`relative flex gap-2 cursor-pointer hover:bg-green-700 active:bg-green-700 p-2 px-4  rounded-md hover:text-white duration-500 ease-in-out `}
                >
                  
                  {menuItem.icon}
                  {menuItem.label}
                </label>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-2 mt-4 w-full text-sm sm:text-lg md:text-2xl p-3 px-4 hover:bg-green-700 rounded-md hover:text-white duration-500 ease-in-out">
          <MdLogout size={25} />
          <button className="" onClick={() => signOut()}>Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
