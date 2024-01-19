"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";
import { ImCross } from "react-icons/im";

function Modal({
  placeholder1,
  placeholder2,
  placeholder3,
  label1,
  label2,
  label3,
  label4,
}) {
  const { showModal, setShowModal } = useContext(GlobalContext);

  return (
    <>
      {showModal ? (
        <div>
          <div className="font-fontInput ">
            <div className="absolute bg-green-700 rounded-2xl left-1/2 top-1/2  -translate-x-1/2  text-white w-1/2 max-w-md z-[9999]">
              <ImCross
                onClick={() => setShowModal(!showModal)}
                size={35}
                className="p-2 bg-red-500 rounded-lg cursor-pointer"
              />
              <form className="flex flex-col  p-5 rounded-lg">
                <label className="mt-3">{label1}</label>
                <input
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                  type="text"
                  placeholder={placeholder1}
                />
                <label className="mt-3">{label2}</label>
                <input
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                  type="email"
                  placeholder={placeholder2}
                />
                <label className="mt-3">{label3}</label>
                <input
                  className="focus:outline-none px-2 py-1 rounded-lg text-black"
                  type="text"
                  placeholder={placeholder3}
                />
                <label className="mt-3">{label4}</label>
                <select
                  name="status"
                  id="status"
                  className="text-black focus:outline-none"
                >
                  <option value="active">Active</option>
                  <option value="not active">Not Active</option>
                </select>
                <button className="my-3 p-2 bg-red-500 rounded-lg">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
