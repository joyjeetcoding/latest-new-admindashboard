"use client"
import ReactApexChart from "react-apexcharts";
import { yearlyAnalyticsChartOptions } from "./subComponents/config";

const monthsArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getSales(products, getMonth) {
  if (products.filter((item) => item.month === getMonth).length === 0) return 0;

  return products
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.sales, 0);
}
function getRevenue(products, getMonth) {
  if (products.filter((item) => item.month === getMonth).length === 0) return 0;
  return products
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.revenue, 0);
}

function getCost(products, getMonth) {
  if (products.filter((item) => item.month === getMonth).length === 0) return 0;
  return products
    .filter((item) => item.month === getMonth)
    .reduce((acc, productItem) => acc + productItem.cost, 0);
}

function YearlyAnalytics({ allProducts }) {
  const series = [
    {
      name: "Sales",
      data: monthsArray.map((item) => getSales(allProducts, item)),
    },
    {
      name: "Cost",
      data: monthsArray.map((item) => getCost(allProducts, item)),
    },
    {
      name: "Revenue",
      data: monthsArray.map((item) => getRevenue(allProducts, item)),
    },
  ];

  return (
    <div className="p-4">
      <div>
        <p className="text-orange-500 font-semibold">Yearly Analytics Overview</p>
      </div>
      <div>
        <ReactApexChart
        options={yearlyAnalyticsChartOptions}
        series={series}
        type="area"
        height={350}
        />
      </div>
    </div>

    // <div className="col-span-12 rounded-sm border border-stroke bg-white px-5 pt-7 pb-7 shadow sm:px-7.5  xl:col-span-8">
    //   <div className="flex w-full flex-col flex-wrap items-start justify-between gap-3 sm:flex-nowrap">
    //     <p className="font-bold text-primary">Yearly Analytics Overview</p>
    //     <div className="w-full">
    //       <div id="YearlyAnalayticsChart" className="ml-5">
    //         <ReactApexChart
    //           options={yearlyAnalyticsChartOptions}
    //           series={series}
    //           type="area"
    //           height={350}
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default YearlyAnalytics;
