"use client"
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";


function RemoveBtnforProducts({id}) {

    const router = useRouter();

    const deleteProduct = async() => {
        const confirmed = confirm("Are you sure to delete this product ?");

        if(confirmed) {
            const res = await fetch(`https://admindocx.vercel.app/api/products/deleteproduct?id=${id}`, {
                method: "DELETE",
            })

            if(res.ok) {
                router.refresh();
            }
        }

    }

  return (
    <div>
        <FaTrash
        onClick={deleteProduct}
        size={15}
        className="text-red-500 cursor-pointer"
      />
    </div>
  )
}

export default RemoveBtnforProducts