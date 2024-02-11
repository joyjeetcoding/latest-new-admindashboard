"use client";
import React, { useContext, useState } from "react";
import Modal from "./Modal/ModalforVisitor";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import Button from "./FormControls/button";

function EditProduct({ id, deviceName, month, price, sales }) {
  const { handleCrossonProduct, showModal, setShowModal } =
    useContext(GlobalContext);
  const router = useRouter();

  // We are getting from the EditForm page.js passed parameters
  const [newdeviceName, setNewdeviceName] = useState(deviceName);
  const [newMonth, setNewMonth] = useState(month);
  const [newPrice, setNewPrice] = useState(price);
  const [newSales, setNewSales] = useState(sales);

  console.log("Device Name", newdeviceName);
  console.log("Month", newMonth);
  console.log("Price", newPrice);
  console.log("Sales", newSales);

  


  const hanleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://admindocx.vercel.app/api/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newdeviceName, newMonth, newPrice, newSales }),
      });

      if (res.ok) {
        setShowModal(!showModal);
        router.push("/dashboard/products");
        router.refresh();
      }

      console.log(res);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div>
        <div className="bg-black fixed z-40 opacity-25 inset-0"></div>
        <div className="font-fontInput ">
          <div className="absolute bg-green-700 rounded-2xl left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  text-white w-1/2 max-w-md z-[40]">
            <ImCross
              onClick={handleCrossonProduct}
              size={35}
              className="p-2 bg-red-500 rounded-lg cursor-pointer"
            />
            <form
              onSubmit={hanleSubmit}
              className="flex flex-col  p-5 rounded-lg"
            >
              <label className="mt-3">Device Name</label>
              <select
                value={newdeviceName}
                onChange={(e) => setNewdeviceName(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              >
                <option value="not-Selected">--Select--</option>
                <option value="Nokia">Nokia</option>
                <option value="Samsung">Samsung</option>
                <option value="Apple">Apple</option>
                <option value="Vivo">Vivo</option>
                <option value="Oppo">Oppo</option>
                <option value="One Plus">One Plus</option>
              </select>
              {/* <input
                type="text"
                value={newdeviceName}
                placeholder="Enter Device's Name"
                onChange={(e) => setNewdeviceName(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              /> */}
              <label className="mt-3">Month</label>
              <select
                value={newMonth}
                onChange={(e) => setNewMonth(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              >
                <option value="not-Selected">--Select--</option>
                <option id="jan" value="January">
                  January
                </option>
                <option id="feb" value="February">
                  February
                </option>
                <option id="mar" value="March">
                  March
                </option>
                <option id="apr" value="April">
                  April
                </option>
                <option id="may" value="May">
                  May
                </option>
                <option id="jun" value="June">
                  June
                </option>
                <option id="jul" value="July">
                  July
                </option>
                <option id="aug" value="August">
                  August
                </option>
                <option id="sep" value="September">
                  September
                </option>
                <option id="oct" value="October">
                  October
                </option>
                <option id="nov" value="November">
                  November
                </option>
                <option id="dec" value="December">
                  December
                </option>
              </select>
              {/* <input
                type="text"
                value={newMonth}
                placeholder="Enter Month"
                onChange={(e) => setNewMonth(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              /> */}
              <label className="mt-3">Price</label>
              <input
                type="number"
                value={newPrice}
                placeholder="Enter Device's Price"
                onChange={(e) => setNewPrice(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              />
              <label className="mt-3">Sales</label>
              <input
                type="number"
                value={newSales}
                placeholder="Total Sales"
                onChange={(e) => setNewSales(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              />

              <button type="submit" className="my-3 p-2 bg-red-500 rounded-lg">
                Submit/Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
