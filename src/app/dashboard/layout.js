import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

function layout({ children }) {
  return (
    <div className="w-full h-full">
      <div className="flex">
        <div>
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
