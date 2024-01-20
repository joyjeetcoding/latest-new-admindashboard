"use client";
import Modal from "@/components/Modal";
import { GlobalContext } from "@/context";
import { registerNewVisitor } from "@/services/visitors";
import { usersFormControls } from "@/utils/config";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

const initialFormValues = {
  name: "",
  email: "",
  status: "",
};

function page() {
  const { handleNew, showModal, setShowModal } = useContext(GlobalContext);
  const [formValues, setFormValues] = useState(initialFormValues);
  console.log(formValues);
  const router = useRouter();

  async function handleAddVisitors() {
    const response = await registerNewVisitor(formValues);
    console.log(response);

    if (response.success) {
      setFormValues(initialFormValues);
      setShowModal(!showModal);
      router.refresh();
      router.push("/dashboard/users");
    }
  }
  return (
    <div>
      {showModal ? (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      ) : null}
      {showModal ? (
        <Modal
          formValues={formValues}
          setFormValues={setFormValues}
          formControls={usersFormControls}
          onAdd={handleAddVisitors}
        />
      ) : null}
    </div>
  );
}

export default page;
