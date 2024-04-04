import Link from "next/link";
import Search from "./SearchforProducts";
import { BsPencilSquare } from "react-icons/bs";
import AddNewBtnVisitors from "./FormControls/addnewVisitor";
import RemoveBtnforVisitor from "./RemoveBtn";
import SearchforVisitors from "./SearchforVisitors";

async function extractAll() {
  const res = await fetch(process.env.ALL_VISITORS, {
    method: "GET",
    cache: "no-store",
  });

  const data = await res.json();
  return data;
}

async function Userspage() {
  const allVisitors = await extractAll();
  // console.log(allVisitors);
  return (
    <div className="">
      <div className="font-fontInput flex flex-col justify-between px-10 py-5 mt-2">
        <div className="w-full ">
          {/* Search bar */}
          <AddNewBtnVisitors />
        </div>
        <div>
          <div className="relative overflow-x-auto text-black">
            <table className="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allVisitors.data.map((item) => (
                  <tr key={item._id} className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.location}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4 flex">
                      <Link href={`/dashboard/users/${item._id}`}>
                        <BsPencilSquare
                          size={17}
                          className="mr-2 text-green-500 cursor-pointer"
                        />
                      </Link>

                      <RemoveBtnforVisitor id={item._id} />
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

export default Userspage;
