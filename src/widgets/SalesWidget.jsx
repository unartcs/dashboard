import React from "react";
import usersData from "../data/UsersData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { FaMoneyBillWave } from "react-icons/fa";

const options = {
  chart: {
    type: "pie",
    height: 100,
    width: 100,
    backgroundColor: null,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: null,
  },
  tooltip: {
    valueSuffix: "%",
  },
  plotOptions: {
    series: {
      dataLabels: { enabled: false },
    },
    pie: {
      size: "200%",
    },
  },
  series: [
    {
      colorByPoint: true,
      data: [
        {
          name: "Asia",
          y: 10,
        },
        {
          name: "USA",
          y: 39,
        },
        {
          name: "Africa",
          y: 5,
        },

        {
          name: "Europe",
          y: 46,
        },
      ],
    },
  ],
};

const SalesWidget = () => {
  return (
    <div className="sales-widget-wrapper flex bg-mainColor p-7">
      <div className="widget-info flex flex-col w-[20rem] text-blue-400 text-xl">
        <FaMoneyBillWave size={32} color="#60a5fa" />
        <h1 className="text-white">47,531</h1>
        <h2>Total Sales</h2>
      </div>
      <div className="">
        <HighchartsReact options={options} highcharts={Highcharts} />
      </div>
    </div>
  );
};

export default SalesWidget;
