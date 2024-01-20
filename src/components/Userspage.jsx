"use client";
import { useContext, useState } from "react";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";
import { GlobalContext } from "@/context";
import Modal from "./Modal";
import { usersFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { registerNewVisitor } from "@/services/visitors";


const initialFormValues = {
  name: "",
  email: "",
  status: "",
}

async function Userspage() {
  const { showModal,setShowModal } = useContext(GlobalContext);
  const [formValues, setFormValues] = useState(initialFormValues);
  const router = useRouter();

  console.log(formValues);

  async function handleAddVisitors() {
    
    const response = await registerNewVisitor(formValues);
    console.log(response);

    if(response.success) {
      setFormValues(initialFormValues);
      setShowModal(!showModal);
      router.refresh();
    } 

  }

  async function extractAll() {
    const res = await fetch(process.env.ALL_VISITORS, {
      method: "GET",
      cache: "no-store",
    })

    const data = await res.json();
    return data;
  }

  const allVisitors = await extractAll();
  return (


    <div className="relative">
      {
        showModal ? <div className="opacity-25 fixed inset-0 z-40 bg-black"></div> : null
      }
      <div className="font-fontInput flex flex-col justify-between px-10 ">
        <div className="w-full">
          {/* Search bar */}
          <Search placeholder={"Search Visitor"} />
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
                    Location
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
                    {allVisitors.data.name}
                  </th>
                  <td class="px-6 py-4">{allVisitors.data.email}</td>
                  <td class="px-6 py-4">{allVisitors.data.location}</td>
                  <td class="px-6 py-4">{allVisitors.data.status}</td>
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
        onAdd={handleAddVisitors}
        /> : null
      }
    </div>
  );
}

export default Userspage;
