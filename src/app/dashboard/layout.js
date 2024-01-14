import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function layout({ children }) {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div className="w-1/2 md:w-[40%] lg:w-[20%] h-screen bg-green-500 text-white">
          <Sidebar />
        </div>
        <div>
          <Navbar />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default layout;
