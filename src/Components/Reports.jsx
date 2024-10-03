import React, { useState } from "react";
import CardFliter from "./CardFliter";
import ReportCharts from "./ReportCharts";

const Reports = () => {
  const [filter, setFilter] = useState("Today");
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };
  return (
    <div className="card">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body">
        <h6 className="card-title">
          Reports <span>/ {filter}</span>
        </h6>
        <ReportCharts/>
      </div>
    </div>
  );
};

export default Reports;
