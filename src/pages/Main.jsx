import React from "react";
import UsersWidget from "../widgets/UsersWidget";
import ClientsWidget from "../widgets/ClientsWidget";
import BudgetWidget from "../widgets/BudgetWidget";
import TrafficWidget from "../widgets/TrafficWIdget";
import SalesWidget from "../widgets/SalesWidget";

const Main = () => {
  return (
    <div className="main-wrapper px-10 flex flex-col gap-5">
      <h1 className="text-2xl font-bold text-textColor">Dashboard Overview</h1>
      <div className="main-top-section grid grid-cols-auto grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <UsersWidget />
        <ClientsWidget />
        <div className="col-span-2">
          <SalesWidget />
        </div>
        <div className="col-span-2">
          <BudgetWidget />
        </div>
        <div className="col-span-2">
        </div>
      </div>
    </div>
  );
};

export default Main;
