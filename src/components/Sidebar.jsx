import {
  MdOutlineSpaceDashboard,
  MdOutlineProductionQuantityLimits,
  MdPeople,
  MdLogout,
} from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

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
  return (
    <div className="font-fontInput relative">
        <h1 className="font-heading font-extrabold text-center text-lg md:text-2xl lg:text-3xl">ADMINOX</h1>
      <div className=" flex justify-center items-center flex-col">
        <div>
          <ul className="flex flex-col gap-7">
            {menuItems.map((menuItem) => (
              <li key={menuItem.id} className="text-sm sm:text-lg md:text-2xl">
                <label className="relative flex gap-2 cursor-pointer">
                  {menuItem.icon}
                  {menuItem.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-2 mt-4">
          <MdLogout size={25} />
          <button className="">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
