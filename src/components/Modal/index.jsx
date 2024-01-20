"use client";

import { GlobalContext } from "@/context";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import Input from "../FormControls/input";
import Button from "../FormControls/button";

function Modal({ formValues, setFormValues, formControls = [], onAdd }) {
  
  const { showModal, setShowModal } = useContext(GlobalContext);

  return (
    <>
      {showModal ? (
        <div>
          <div className="font-fontInput ">
            <div className="absolute bg-green-700 rounded-2xl left-1/2 top-1/2  -translate-x-1/2  text-white w-1/2 max-w-md z-[40]">
              <ImCross
                onClick={() => setShowModal(!showModal)}
                size={35}
                className="p-2 bg-red-500 rounded-lg cursor-pointer"
              />
              <form className="flex flex-col  p-5 rounded-lg">
                {formControls && formControls.length
                  ? formControls.map((item) =>
                      item.componentType === "input" ? (
                        <Input
                          type={item.type}
                          placeholder={item.placeholder}
                          label={item.label}
                          value={formValues && formValues[item.id]}
                          onChange={(e) =>
                            setFormValues({
                              ...formValues,
                              [item.id]: e.target.value,
                            })
                          }
                        />
                      ) : null
                    )
                  : null}
                <Button text={"Submit/Update"} onClick={onAdd} />
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Modal;
