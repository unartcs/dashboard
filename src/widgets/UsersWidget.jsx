import React from "react";
import usersData from "../data/UsersData";
import { FaUsers } from "react-icons/fa";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const calculateData = () => {
  const admins = [];
  const managers = [];
  const users = [];
  usersData.forEach((user) => {
    if (user.role == "admin") {
      admins.push(user);
    }
    if (user.role == "manager") {
      managers.push(user);
    }
    if (user.role == "user") {
      users.push(user);
    }
  });
  const adminsData = {
    name: "Admins",
    y: (admins.length / usersData.length) * 10,
  };
  const managersData = {
    name: "Managers",
    y: (managers.length / usersData.length) * 10,
  };
  const normalUsersData = {
    name: "Users",
    y: (users.length / usersData.length) * 10,
  };
  const allData = [adminsData, managersData, normalUsersData];
  return allData;
};

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
  plotOptions: {
    series: {
      dataLabels: { enabled: false },
    },
    pie: {
      size: '200%'
  }
  },
  series: [
    {
      name: "Amount",
      colorByPoint: true,

      data: calculateData(),
    },
  ],
};

const UsersWidget = () => {
  return (
    <div className="users-widget-wrapper flex bg-mainColor p-7">
      <div className="widget-info flex flex-col w-[20rem] text-blue-400 text-xl">
        <FaUsers size={32} color="#60a5fa" />
        <h1 className="text-white">{usersData.length}</h1>
        <h2>Total users</h2>
      </div>
      <div className="">
        <HighchartsReact options={options} highcharts={Highcharts} />
      </div>
    </div>
  );
};

export default UsersWidget;
