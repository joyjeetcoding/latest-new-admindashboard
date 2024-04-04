"use client";
import { GlobalContext } from "@/context";
import { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import AddNewBtn from "./FormControls/addnewVisitor";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { set } from "mongoose";

function SearchforVisitors({ placeholder }) {
  const { handleNew } = useContext(GlobalContext);


  return (
    <div className="font-fontInput">
      <form className=" w-full p-5">
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MdSearch size={20} />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full text-black p-4 ps-8 text-sm  border border-gray-300 rounded-lg bg-gray-50 focus:outline-none"
            placeholder={placeholder}
            required
          />
        </div>
      </form>
    </div>
  );
}

export default SearchforVisitors;
