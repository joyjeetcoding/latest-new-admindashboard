import Link from "next/link";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import AddNewBtnProducts from "./FormControls/addNEwProducts";
import RemoveBtnforProducts from "./RemoveBtnforProducts";
import { connectToDB } from "@/database/mongodb";
import Products from "@/models/Products";

async function extractAll(q) {
  // "i" means case insensitve means we can use capital letters as well
  const regex = new RegExp(q, "i");

  try {
    await connectToDB();
    const users = await Products.find({ deviceName: { $regex: regex } });
    return users;
  } catch (error) {
    console.log("Error", error);
  }
}

async function ProductsPage({ searchParams }) {
  const q = searchParams?.q || "";

  const allProducts = await extractAll(q);
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
                {allProducts.map((item) => (
                  <tr key={item._id} className="bg-white border-b ">
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
                      <Link href={`/dashboard/products/${item.id}`}>
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
