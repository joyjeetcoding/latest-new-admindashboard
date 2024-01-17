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

      {/* <form className="w-[80%] lg:max-w-[60%] p-5"> 
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full text-black p-4 ps-10 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            placeholder="Search"
            required
          />
          <button onClick={(e) => e.preventDefault()}
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-500 hover:text-black duration-300 ease-in-out focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 lg:px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>  */}
    </div>
  );
}

export default Navbar;
