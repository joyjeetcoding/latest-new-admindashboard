import Link from "next/link";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import RemoveBtn from "./RemoveBtn";
import AddNewBtnVisitors from "./FormControls/addnewVisitor";

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
  console.log(allVisitors);
  return (
    <div className="relative">
      <div className="font-fontInput flex flex-col justify-between px-10 ">
        <div className="w-full relative">
          {/* Search bar */}
          <Search placeholder={"Search Visitor"} />
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
                  <tr key={item.id} className="bg-white border-b ">
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

                      <RemoveBtn id={item._id} />
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
