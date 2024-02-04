import { FaUsers } from "react-icons/fa";
import Card from "./Card";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";

function DashboardLayout({allVisitors, allProducts}) {
  return (
    <div className="font-fontInput">
      <div className="relative">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 absolute  -translate-x-1/2 left-1/2 lg:left-0 lg:-translate-x-0 md:gap-6 lg:grid-cols-4 lg:gap-7 ">
          <Card 
          icon={<FaUsers size={28} className="absolute translate-y-2 translate-x-2" />}
          data={
            allVisitors && allVisitors.length
          }
          label={"Total Visitors"}
          />
          
          <Card 
          icon={<MdOutlineProductionQuantityLimits size={28} className="absolute translate-y-2 translate-x-2" />}
          data={
            allProducts && allProducts.length
          }
          label={"Total Products"}
          />

        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
