import React, { useState } from 'react';
import CardFliter from './CardFliter';
import RecentActivityItem from './RecentActivityItem';
import './recentActivity.css';
import resentData from '../api/info.json'; // Import JSON data

function RecentActivity() {
  const [filter, setFilter] = useState("Today");
  const items = resentData.recentactivity; // Use data directly from JSON

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  return (
    <div className="card mt-3">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body">
        <h6 className="card-title">
          Recent Activity <span>| {filter}</span>
        </h6>
        <div className="activity">
          {items && items.length > 0 ? (
            items.map((item) => (
              <RecentActivityItem key={item.id} item={item} />
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
