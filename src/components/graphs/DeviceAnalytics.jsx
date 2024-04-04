"use client";

import ReactApexChart from "react-apexcharts";
import { deviceAnalyticsChartOptions } from "./subComponents/config";

function getDevices(data, getProduct) {
  if (
    data &&
    data.length &&
    data.filter((item) => item.deviceName === getProduct).length === 0
  )
    return 0;

  return data && data.length
    ? data.filter((item) => item.deviceName === getProduct).length
    : 0;
}

function DeviceAnalytics({ allProducts }) {
  const series = [
    getDevices(allProducts, "Nokia"),
    getDevices(allProducts, "Samsung"),
    getDevices(allProducts, "Apple"),
    getDevices(allProducts, "Vivo"),
    getDevices(allProducts, "Oppo"),
    getDevices(allProducts, "One Plus"),
  ];

  return (
    <div className="">
      <div className="p-4">
        <p className="text-orange-500 font-semibold">Visitor Analytics By Devices</p>
        <div className="w-full mb-2">
          <div
            className=" flex justify-center"
          >
            <ReactApexChart
              options={deviceAnalyticsChartOptions}
              series={series}
              type="donut"
              height={350}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeviceAnalytics;
