import React, { useState } from 'react'
import WebTrafficChart from './WebTrafficChart';
import CardFliter from './CardFliter';

function WebTraffic() {
    const [filter, setFilter] = useState("Today");

    const handleFilterChange = (filter) => {
      setFilter(filter);
    };
  return (
    <div className="card mt-3">
    <CardFliter filterChange={handleFilterChange} />
    <div className="card-body pb-0">
      <h6 className="card-title">
        Website Tracffic <span>| {filter}</span>
      </h6>
      <WebTrafficChart />
    </div>
  </div>

  )
}

export default WebTraffic