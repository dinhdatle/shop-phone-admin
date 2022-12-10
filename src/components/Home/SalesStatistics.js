import React from "react";

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Sale statistics</h5>
          <iframe 
                  style={{
                    background: "#FFFFFF",
                    border: "none" ,
                    borderRadius: "2px",
                    boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}}
                  width="640" 
                  height="480" 
                  src="https://charts.mongodb.com/charts-shopshoe-zvppw/embed/charts?id=6336bd8c-32b3-44aa-8e40-07fb047b5361&maxDataAge=3600&theme=light&autoRefresh=true">
          </iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
