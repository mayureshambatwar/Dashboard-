import React, { useEffect, useState } from "react";
import CardFliter from "./CardFliter";
import NewsPostItem from "./NewsPostItem";
import './news.css'

function News() {
  const [news, setNews] = useState([]);
  const [filter, setFilter] = useState("Today");

  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const fetchData = () => {
    fetch("http://localhost:4000/news")
      .then((res) => res.json()) 
      .then((data) => {
        setNews(data);
      })
      .catch((e) => console.log(e.message)); 
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="card mt-3">
      <CardFliter filterChange={handleFilterChange} />
      <div className="card-body pb-0">
        <h6 className="card-title">
          News &amp; Updates <span>| {filter}</span>
        </h6>
        <div className="news">
          {news && news.length > 0 && 
            news.map((item) => <NewsPostItem key={item.id} item={item} />)
          }
        </div>
      </div>
    </div>
  );
}

export default News;
