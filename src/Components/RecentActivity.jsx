import React, { useEffect, useState } from 'react';
import CardFliter from './CardFliter';
import RecentActivityItem from './RecentActivityItem';
import './recentActivity.css'


function RecentActivity() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/recentactivity") 
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
    <div className="card mt-3">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body">
        <h6 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h6>
        <div className="activity">
          {items && items.length > 0 ? (
            items.map(item => (
              <RecentActivityItem key={item.id} item={item} /> // Added return with parentheses in map
            ))
          ) : (
            <p>No recent activity available.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default RecentActivity;
