"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa";

function RemoveBtn({ id }) {
  const router = useRouter();

  const deleteVisitor = async () => {
    const confirmed = confirm("Are you sure to delete this visitor ? ");

    if (confirmed) {
      const res = await fetch(
        `http://localhost:3000/api/visitors/deletevisitor?id=${id}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <div>
      <FaTrash
        onClick={deleteVisitor}
        size={15}
        className="text-red-500 cursor-pointer"
      />
    </div>
  );
}

export default RemoveBtn;
