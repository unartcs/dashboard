import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

// I should make this 2 grids long

const options = {
  chart: {
    type: "column",
    width: 500,
    height: 300,
    backgroundColor: null
  },
  xAxis: {
    categories: [2021, 2022, 2023],
  },
  yAxis: {
    allowDecimals: false,
    
    title: {
      text: "Money spent",
    },
  },
  credits: {
    enabled: false,
  },
  title: {
    text: null,
  },
  plotOptions: {
    
  },
  series: [
    {
      name: "Development",
      data: [5700, 8900, 9900],
    },
    {
      name: "IT",
      data: [15600, 32000, 15800],
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
      <div className="widget-info flex flex-col w-[20rem] text-blue-400 text-xl">
        <h1 className="text-white">3 Year</h1>
        <h2>Budget Spent</h2>
      </div>
      <div className="text-white">
        <HighchartsReact options={options} highcharts={Highcharts}/>
      </div>
    </div>
  );
};

export default BudgetWidget;
