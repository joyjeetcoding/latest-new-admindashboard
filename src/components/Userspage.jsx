import Link from "next/link";
import Search from "./Search";
import { BsPencilSquare } from "react-icons/bs";
import { FaTrash } from "react-icons/fa";

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
        <div className="w-full">
          {/* Search bar */}
          <Search placeholder={"Search Visitor"} />
        </div>
        <div>
          <div class="relative overflow-x-auto text-black">
            <table class="w-full text-sm text-left  text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allVisitors.data.map((item) => (
                  <tr key={item.id} class="bg-white border-b ">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {item.name}
                    </th>
                    <td class="px-6 py-4">{item.email}</td>
                    <td class="px-6 py-4">{item.location}</td>
                    <td class="px-6 py-4">{item.status}</td>
                    <td class="px-6 py-4 flex">
                      <Link href={"/dashboard/users/test"}>
                        <BsPencilSquare
                          size={17}
                          className="mr-2 text-green-500 cursor-pointer"
                        />
                      </Link>

                      <FaTrash
                        size={15}
                        className="text-red-500 cursor-pointer"
                      />
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
