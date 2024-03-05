import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

// I should make this 2 grids long

const options = {
  chart: {
    type: "column",
    width: 500,
    height: 300,
    backgroundColor: null,
  },
  title: {
    text: null,
  },
  xAxis: {
    categories: [2021, 2022, 2023],
    labels: {
      style: {
        color: "white",
      },
    },
  },
  yAxis: {
    allowDecimals: false,
    labels: {
      style: {
        color: "white",
      },
    },
    title: {
      text: null,
    },
  },
  credits: {
    enabled: false,
  },
  plotOptions: {
    column: {
      dataTables: {
        color: "white",
      },
    },
  },
  legend: {
    itemStyle: {
      color: "white",
    },
  },
  series: [
    {
      name: "Development",
      data: [5700, 8900, 9900],
    },
    {
      name: "IT",
      data: [11600, 12000, 12800],
    },
    {
      name: "Artists",
      data: [3200, 7600, 8090],
    },
    {
      name: "Events",
      data: [5600, 8000, 7000],
    },
  ],
};

const BudgetWidget = () => {
  return (
    <div className="budget-widget-wrapper flex flex-col gap-5 bg-mainColor p-7">
      <div className="widget-info flex justify-center gap-5 text-blue-400 text-xl">
        <h1 className="text-white">3 Year</h1>
        <h2>Budget Spent</h2>
      </div>
      <div className="text-white self-center">
        <HighchartsReact options={options} highcharts={Highcharts} />
      </div>
    </div>
  );
};

export default BudgetWidget;
