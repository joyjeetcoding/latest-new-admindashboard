"use client";
import ModalforVisitor from "@/components/Modal/ModalforVisitor";
import { GlobalContext } from "@/context";
import React, { useContext } from "react";



function page() {
  const { showModal } = useContext(GlobalContext);

  
  return (
    <div>
      {showModal ? (
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      ) : null}
      {showModal ? (
        <ModalforVisitor />
      ) : null}
    </div>
  );
}

export default page;
