import React from "react";
import usersData from "../data/UsersData";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { MdBusinessCenter } from "react-icons/md";

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
          y: 15,
        },
        {
          name: "USA",
          y: 34,
        },
        {
          name: "Africa",
          y: 9,
        },

        {
          name: "Europe",
          y: 42,
        },
      ],
    },
  ],
};

const ClientsWidget = () => {
  return (
    <div className="clients-widget-wrapper flex bg-mainColor p-7">
      <div className="widget-info flex flex-col w-[20rem] text-blue-400 text-xl">
        <MdBusinessCenter size={32} color="#60a5fa" />
        <h1 className="text-white">2,157</h1>
        <h2>Total clients</h2>
      </div>
      <div className="">
        <HighchartsReact options={options} highcharts={Highcharts} />
      </div>
    </div>
  );
};

export default ClientsWidget;
