// json-server --watch --port 4000 ./api/info.json

import { useEffect, useState } from 'react';
import React from 'react';
import CardFliter from './CardFliter';
import RecentSalesTable from './RecentSalesTable';
import './resentSales.css'

function RecentSales() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/recentsales")
      .then((res) => res.json()) 
      .then((data) => {
        setItems(data);
      })
      .catch(e => console.log(e.message));  
  };

  useEffect(() => {
    fetchData();
  }, []);

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
