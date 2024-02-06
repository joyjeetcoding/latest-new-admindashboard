import { FaUsers } from "react-icons/fa";
import Card from "./Card";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RiCloudOffLine } from "react-icons/ri";
import { HiOutlineStatusOnline } from "react-icons/hi";
import YearlyAnalytics from "../graphs/YearlyAnalytics";
import VisitorsAnalytics from "../graphs/VisitorsAnalytics";
import DeviceAnalytics from "../graphs/DeviceAnalytics";

function DashboardLayout({ allVisitors, allProducts }) {
  return (
    <div className="font-fontInput">
      <div className="">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2   md:gap-6 lg:grid-cols-4 lg:gap-7 ">
          <Card
            icon={<FaUsers size={28} className="" />}
            data={allVisitors && allVisitors.length}
            label={"Total Visitors"}
          />

          <Card
            icon={<MdOutlineProductionQuantityLimits size={28} className="" />}
            data={allProducts && allProducts.length}
            label={"Total Products"}
          />

          <Card
            icon={<HiOutlineStatusOnline size={28} className="" />}
            data={
              allVisitors &&
              allVisitors.filter((item) => item.status == "Active").length
            }
            label={"Total Active Visitors"}
          />

          <Card
            icon={<RiCloudOffLine size={28} className="" />}
            data={
              allVisitors &&
              allVisitors.filter((item) => item.status == "Inactive").length
            }
            label={"Total Inactive Visitors"}
          />
        </div>
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2">
          <YearlyAnalytics
            allProducts={
              allProducts && allProducts.length
                ? allProducts.map((items) => ({
                    ...items,
                    revenue: items.price * items.sales - items.sales * 10,
                    cost: items.sales * 10,
                  }))
                : []
            }
          />
          <VisitorsAnalytics
            allVisitors={allVisitors && allVisitors.length ? allVisitors : []}
          />
        </div>
        <div>
          <DeviceAnalytics
          allProducts= {allProducts && allProducts.length ? allProducts : []}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
