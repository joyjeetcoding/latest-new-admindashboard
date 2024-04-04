"use client"
import { GlobalContext } from "@/context";
import { useContext } from "react";

function AddNewBtnProducts() {
  const { handleNewProduct } = useContext(GlobalContext);

  return (
    <>
      <button
        onClick={handleNewProduct}
        type="submit"
        className="text-white  bg-green-700 hover:bg-green-500 hover:text-black duration-300 ease-in-out focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-2 lg:px-4 py-2 -translate-y-1/2 translate-x-5"
      >
        Add New Product
      </button>
    </>
  );
}

export default AddNewBtnProducts;
