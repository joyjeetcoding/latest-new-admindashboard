"use client";
import React, { useContext, useState } from "react";
import Modal from "./Modal/ModalforVisitor";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { ImCross } from "react-icons/im";
import Button from "./FormControls/button";

function EditTopic({ id, name, email, location, status }) {
  const { handleCrossonVisitor, showModal, setShowModal } =
    useContext(GlobalContext);
  const router = useRouter();

  // We are getting from the EditForm page.js passed parameters
  const [newName, setNewName] = useState(name);
  const [newEmail, setNewEmail] = useState(email);
  const [newLocation, setNewLocation] = useState(location);
  const [newStatus, setNewStatus] = useState(status);

  console.log("Name", newName);
  console.log("Email", newEmail);
  console.log("Location", newLocation);
  console.log("Status", newStatus);

  const hanleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`https://admindocx.vercel.app/api/visitors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newName, newEmail, newLocation, newStatus }),
      });

      if (res.ok) {
        setShowModal(!showModal);
        router.push("/dashboard/users");
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
              onClick={handleCrossonVisitor}
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
                placeholder="Enter User's Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              />
              <label className="mt-3">Email</label>
              <input
                type="email"
                placeholder="Enter User's email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              />
              <label className="mt-3">Location</label>
              <input
                type="text"
                placeholder="Enter User's Location"
                value={newLocation}
                onChange={(e) => setNewLocation(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              />
              <label className="mt-3">Status</label>
              <select
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              >
                <option value="not-Selected">--Select--</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
              {/* <input
                type="text"
                placeholder="Active/Not Active"
                value={newStatus}
                onChange={(e) => setNewStatus(e.target.value)}
                className="focus:outline-none px-2 py-1 rounded-lg text-black"
              /> */}
              <button type="submit" className="my-3 p-2 bg-red-500 rounded-lg">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTopic;
