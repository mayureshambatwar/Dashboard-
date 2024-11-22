// json-server --watch --port 4000 ./api/info.json

import { useEffect, useState } from 'react';
import React from 'react';
import CardFliter from './CardFliter';
import RecentSalesTable from './RecentSalesTable';
import './resentSales.css'
import resentSales from '../api/info.json';
function RecentSales() {
  const [filter, setFilter] = useState("Today");

   const items = resentSales.recentsales;
  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  

  return (
    <div className="card recent-sales overflow-auto mt-3">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body">
        <h6 className="cart-title">  
          Recent Sales <span>| {filter}</span>
        </h6>
        <RecentSalesTable items={items} />
      </div>
    </div>
  );
}

export default RecentSales;
