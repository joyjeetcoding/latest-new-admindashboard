import Link from "next/link";
import { BsPencilSquare } from "react-icons/bs";
import AddNewBtnProducts from "./FormControls/addNEwProducts";
import RemoveBtnforProducts from "./RemoveBtnforProducts";

import SearchforProducts from "./SearchforProducts";

async function fetchAllProducts() {
  const res = await fetch(process.env.ALL_PRODUCTS, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}


async function ProductsPage({ searchParams }) {

 
  const allProducts = await fetchAllProducts();

  return (
    <div className="">
      <div className="font-fontInput flex flex-col justify-between px-10 py-5 mt-2">
        <div className="w-full ">
          {/* Search bar */}
          <AddNewBtnProducts />
        </div>
        <div>
          <div className="relative overflow-x-auto text-black">
            <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Device Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Month
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sales
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Revenue
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allProducts.data.map((item) => (
                  <tr key={`${item._id}`} className="bg-white border-b ">
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.deviceName}
                    </td>
                    <td className="px-6 py-4">{item.month}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.sales}</td>
                    <td className="px-6 py-4">{item.sales * item.price}</td>
                    <td className="px-6 py-4 flex">
                      <Link href={`/dashboard/products/${item._id}`}>
                        <BsPencilSquare
                          size={17}
                          className="mr-2 text-green-500 cursor-pointer"
                        />
                      </Link>

                      <RemoveBtnforProducts id={`${item._id}`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
