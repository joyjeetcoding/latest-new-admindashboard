"use client";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";
import { ImCross } from "react-icons/im";

function page() {
  const { showModal ,setShowModal, handleCrossonProduct} = useContext(GlobalContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState("");
  const router = useRouter();

  console.log("Name", name);
  console.log("Email", email);
  console.log("Location", location);
  console.log("Status", status);

  const hanleSubmit = async (e) => {
    e.preventDefault();

    
  };

  return (
    <div>
      {showModal ? (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      ) : null}
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
                <label className="mt-3">Name</label>
                <input
                  type="text"
                  value={name}
                  placeholder="Enter User's Name"
                  onChange={(e) => setName(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Email</label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter User's email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Location</label>
                <input
                  type="text"
                  value={location}
                  placeholder="Enter User's Location"
                  onChange={(e) => setLocation(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <label className="mt-3">Status</label>
                <input
                  type="text"
                  value={status}
                  placeholder="Active/Not Active"
                  onChange={(e) => setStatus(e.target.value)}
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                />
                <button
                  type="submit"
                  className="my-3 p-2 bg-red-500 rounded-lg"
                >
                  Update
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default page;
