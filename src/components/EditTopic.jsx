"use client";
import React, { useContext, useState } from "react";
import Modal from "./Modal";
import { GlobalContext } from "@/context";
import { useRouter } from "next/navigation";
import { usersFormControls } from "@/utils/config";
import Input from "./FormControls/input";
import { ImCross } from "react-icons/im";
import Button from "./FormControls/button";

const initialFormValues = {
  name: "",
  email: "",
  status: "",
};

function EditTopic() {
  const { handleNew, showModal, setShowModal, handleCross } = useContext(GlobalContext);
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);
  const router = useRouter();
  return (
    <>
      <div>
        <div className="bg-black fixed z-40 opacity-25 inset-0"></div>
        <div className="font-fontInput ">
          <div className="absolute bg-green-700 rounded-2xl left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  text-white w-1/2 max-w-md z-[40]">
            <ImCross
              onClick={handleCross}
              size={35}
              className="p-2 bg-red-500 rounded-lg cursor-pointer"
            />
            <form className="flex flex-col  p-5 rounded-lg">
              {usersFormControls.map((item) => (
                <Input
                  type={item.type}
                  label={item.label}
                  placeholder={item.placeholder}
                  value={formValues && formValues[item.id]}
                  onChange={(e) =>
                    setFormValues({
                      ...formValues,
                      [item.id]: e.target.value,
                    })
                  }
                />
              ))}

              <Button text={"Update"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditTopic;
