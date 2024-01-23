"use client";

import { GlobalContext } from "@/context";
import { useContext, useState } from "react";
import { ImCross } from "react-icons/im";
import { useRouter } from "next/navigation";

function ModalforProducts() {
  const { showModal, setShowModal, handleCrossonProduct } = useContext(GlobalContext);

  const [deviceName, setDeviceName] = useState("");
  const [month, setMonth] = useState("");
  const [price, setPrice] = useState(0);
  const [sales, setSales] = useState(0);
  const router = useRouter();

  console.log("DeviceName", deviceName);
  console.log("Month", month);
  console.log("Price", price);
  console.log("Sales", sales);

  const hanleSubmit = async (e) => {
    e.preventDefault();

    if(!deviceName || !month || !price  || !sales) {
      alert("Every field is necessary!!!");
      return;
    }

    try {
      const res = await fetch("/api/products/addproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({deviceName, month, price, sales}),
      })

      if(res.ok) {
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
      {showModal ? (
        <div>
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
                <input
                  type="text"
                  value={deviceName}
                  placeholder="Enter Device's Name"
                  onChange={(e) => setDeviceName(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Month</label>
                <input
                  type="text"
                  value={month}
                  placeholder="Enter Month"
                  onChange={(e) => setMonth(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Price</label>
                <input
                  type="number"
                  value={price}
                  placeholder="Enter Device's Price"
                  onChange={(e) => setPrice(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Sales</label>
                <input
                  type="number"
                  value={sales}
                  placeholder="Total Sales"
                  onChange={(e) => setSales(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                
                <button
                  type="submit"
                  className="my-3 p-2 bg-red-500 rounded-lg"
                >
                  Submit/Update
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default ModalforProducts;
