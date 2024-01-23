import Link from "next/link";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import RemoveBtn from "./RemoveBtn";
import AddNewBtnProducts from "./FormControls/addNEwProducts";
import RemoveBtnforProducts from "./RemoveBtnforProducts";

async function extractAll() {
  const res = await fetch(process.env.ALL_PRODUCTS, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

async function ProductsPage() {
  const allProducts = await extractAll();
  console.log(allProducts);

  return (
    <div className="relative">
      <div className="font-fontInput flex flex-col justify-between px-10 ">
        <div className="w-full relative">
          {/* Search bar */}
          <Search placeholder={"Search Products"} />
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
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.deviceName}
                    </th>
                    <td className="px-6 py-4">{item.month}</td>
                    <td className="px-6 py-4">{item.price}</td>
                    <td className="px-6 py-4">{item.sales}</td>
                    <td className="px-6 py-4">{item.sales * item.price}</td>
                    <td className="px-6 py-4 flex">
                      <Link href={`/dashboard/products/${123}`}>
                        <BsPencilSquare
                          size={17}
                          className="mr-2 text-green-500 cursor-pointer"
                        />
                      </Link>

                      <RemoveBtnforProducts id={item._id} />
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
