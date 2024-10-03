import React, { useEffect, useState } from "react";
import CardFliter from "./CardFliter";
import BudgetChart from "./BudgetChart";

function BudgetReport() {
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card mt-3">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h6 className="card-title">
          Budget Report <span>| {filter}</span>
        </h6>
        <BudgetChart />
      </div>
    </div>
  );
}

export default BudgetReport;
