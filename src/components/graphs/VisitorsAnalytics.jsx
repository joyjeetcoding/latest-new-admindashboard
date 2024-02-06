"use client";
import ReactApexChart from "react-apexcharts";
import { visitorAnalyticsChartOptions } from "./subComponents/config"

function getAllActiveVisitorsbyCountry(data, country) {
  if (data && data.length === 0) return 0;

  return data.filter(
    (item) => item.location === country && item.status === "Active"
  ).length;
}

function getAllInActiveVisitorsbyCountry(data, country) {
  if (data && data.length === 0) return 0;

  return data.filter(
    (item) => item.location === country && item.status === "Inactive"
  ).length;
}

function VisitorsAnalytics({ allVisitors }) {
  //   This is for those places who have duplicate names nad giving it as unique name
  const uniqueLocation = [...new Set(allVisitors.map((item) => item.location))];

  const maxUniqueLocationToShow = uniqueLocation.slice(
    0,
    uniqueLocation && uniqueLocation.length > 4 ? 4 : uniqueLocation.length
  );

  const series = [
    {
      name: "Active Visitor",
      data: maxUniqueLocationToShow.map((locationItem) =>
        getAllActiveVisitorsbyCountry(allVisitors, locationItem)
      ),
    },
    {
      name: "Inactive Visitor",
      data: maxUniqueLocationToShow.map((locationItem) =>
        getAllInActiveVisitorsbyCountry(allVisitors, locationItem)
      ),
    },
  ];
  //   we are updating the options and giving the unique name to the x-axis
  let updatedOptions = {
    ...visitorAnalyticsChartOptions,
    xaxis: {
      categories: maxUniqueLocationToShow,
    },
  };

  return (
    <div className="p-4">
      <div className="">
        <p className="text-orange-500 font-semibold">Visitors by Country</p>
        <div className="w-[80%]">
          <div id="VisitorsAnalytics" className="ml-5">
            <ReactApexChart
              options={updatedOptions}
              series={series}
              type="area"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisitorsAnalytics;
