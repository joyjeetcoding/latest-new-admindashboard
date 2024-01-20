"use client";
import { GlobalContext } from "@/context";
import { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";

function Search({ placeholder }) {
  const { handleNew } = useContext(GlobalContext);

  return (
    <div className="font-fontInput">
      <form className=" w-full p-5">
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdSearch size={20} />
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full text-black p-4 ps-8 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            placeholder={placeholder}
            required
          />
          <button
            onClick={handleNew}
            type="submit"
            class="text-white absolute end-2.5 bottom-2.5 bg-green-700 hover:bg-green-500 hover:text-black duration-300 ease-in-out focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 lg:px-4 py-2 "
          >
            Add New
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
