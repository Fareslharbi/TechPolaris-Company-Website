import React from "react";
import "./DA_whyDA.css";
import img from "../../assets/data-analytic-service.png.webp";
const DA_whyDA = () => {
  return (
    <div className="DA_whyDA_container bg-light">
      <h1>Why You Need Data Analytics Services?</h1>
      <div className="DA_whyDA_container_info">
        <img src={img} alt="DA WhyDA" className="rounded-4" />
        <div>
          <p>
            Data is one of the most precious assets for a business today. Now is
            the time when organizations depend on data analytics to come to the
            right decision, minimize risk, and maximize profits. This is the
            reason why more and more organizations are turning to data analytics
            services companies like us today. Some of the major advantages of
            data analytics services are
          </p>
          <ul>
            <li>
              <p>
                Predictive Analytics can help you optimize your future business
                decisions by using efficient data models.
              </p>
            </li>
            <li>
              <p>
                With the right data analytics, you can forecast the future
                outcomes of the decisions you take.
              </p>
            </li>
            <li>
              <p>
                Descriptive analytics can help you review past events & help you
                come to the right future decisions.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <button className="btn btn-primary">Learn More</button>
    </div>
  );
};

export default DA_whyDA;
