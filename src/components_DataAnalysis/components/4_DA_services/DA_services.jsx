import "./DA_services.css";
import React from "react";
import img from "../../assets/Data-Analytics-Consulting.svg.png";
import img1 from "../../assets/Data-as-a-Service.svg.png";
import img2 from "../../assets/Data-Analytics-Implementation.svg.png";
import img3 from "../../assets/Data-Analytics-support-and-Evolution.svg.png";
const DA_services = () => {
  return (
    <div className="DA_services_container">
      <h1>What Can We Do For You?</h1>
      <h3>Utilizing your data to make efficient decisions.</h3>
      <p>
        At TechPolaris, we have a team of efficient data analysts who can help
        bring the right data analytics solution to your organization. With the
        innovative approaches and intelligent data infrastructure, we can help
        you attain the best possible solution for your data. Our service set
        ranges from consulting to implementation of the right data analytics
        solution for your company.
      </p>
      <div className="card-group">
        <div className="card border rounded bg-light">
          <div className="card-body">
            <div className="img-fluid mb-4">
              <img src={img} alt="DA sec_logo" />
            </div>
            <h3>Data Analytics Consulting</h3>
            <p>
              We offer data analytics consulting services to all our clients so
              that they can benefit from the best solutions we have. After we
              understand their business goal, we help them find the optimum data
              analytics solution for your company.
            </p>
          </div>
        </div>
        <div className="card border rounded bg-light">
          <div className="card-body">
            <div className="img-fluid mb-4">
              <img src={img1} alt="DA sec_logo" />
            </div>
            <h3>Data Analytics As A Service</h3>
            <p>
              With data analytics as a service, you can derive useful insights
              out of the raw data. This can help you avoid the time as well as
              cost of developing a full-scale data analytics solution
            </p>
          </div>
        </div>
        <div className="card border rounded bg-light">
          <div className="card-body">
            <div className="img-fluid mb-4">
              <img src={img2} alt="DA sec_logo" />
            </div>
            <h3>Data Analytics Implementation</h3>
            <p>
              With DataToBiz, you can get the best data analytics implementation
              services. We help you find the right kind of analytics solution
              for your company, ensuring that you get the best results.
            </p>
          </div>
        </div>
        <div className="card border rounded bg-light">
          <div className="card-body">
            <div className="img-fluid mb-4">
              <img src={img3} alt="DA sec_logo" />
            </div>
            <h3>Data Analytics Support & Evolution</h3>
            <p>
              Between data analytics consulting services and implementation
              services, we also are renowned for our top-class support facility.
              With DataToBiz, you get a full-tuned support team to help you in
              case of any issue.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DA_services;
