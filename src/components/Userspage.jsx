"use client";
import { useContext, useState } from "react";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { GlobalContext } from "@/context";
import Modal from "./Modal";
import { usersFormControls } from "@/utils/config";


const initialFormValues = {
  name: "",
  email: "",
  status: "",
}

function Userspage() {
  const { showModal } = useContext(GlobalContext);
  const [formValues, setFormValues] = useState(initialFormValues);

  console.log(formValues);

  return (
    <div className="relative">
      {
        showModal ? <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> : null
      }
      <div className="font-fontInput flex flex-col justify-between px-10 ">
        <div className="w-full">
          {/* Search bar */}
          <Search placeholder={"Search User"} />
        </div>
        <div>
          <div class="relative overflow-x-auto text-black">
            <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b ">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                  >
                    Joyjeet
                  </th>
                  <td class="px-6 py-4">joy@gmail.com</td>
                  <td class="px-6 py-4">Active</td>
                  <td class="px-6 py-4 flex">
                    <BsPencilSquare 
                      size={17}
                      className="mr-2 text-green-500 cursor-pointer"
                    />
                    <FaTrash
                      size={15}
                      className="text-red-500 cursor-pointer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {
        showModal ? <Modal
        formValues={formValues}
        setFormValues={setFormValues}
        formControls={usersFormControls}
        /> : null
      }
    </div>
  );
}

export default Userspage;
