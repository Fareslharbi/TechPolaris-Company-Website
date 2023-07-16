import "./DA_services.css";
import React from "react";
import img from "../../assets/Data-Analytics-Consulting.svg.png";
import img1 from "../../assets/Data-as-a-Service.svg.png";
import img2 from "../../assets/Data-Analytics-Implementation.svg.png";
import img3 from "../../assets/Data-Analytics-support-and-Evolution.svg.png";
const DA_services = () => {
  const data = [
    {
      id: 0,
      title: "Data Analytics Consulting",
      desc: "We offer data analytics consulting services to all our clients so that they can benefit from the best solutions we have. After we understand their business goal, we help them find the optimum data analytics solution for your company.",
      image: img,
    },
    {
      id: 1,
      title: "Data Analytics As A Service",
      desc: "With data analytics as a service, you can derive useful insights out of the raw data. This can help you avoid the time as well as cost of developing a full-scale data analytics solution",
      image: img1,
    },
    {
      id: 2,
      title: "Data Analytics Implementation",
      desc: "With DataToBiz, you can get the best data analytics implementation services. We help you find the right kind of analytics solution for your company, ensuring that you get the best results.",
      image: img2,
    },
    {
      id: 3,
      title: "Data Analytics Support & Evolution",
      desc: "Between data analytics consulting services and implementation services, we also are renowned for our top-class support facility. With DataToBiz, you get a full-tuned support team to help you in case of any issue.",
      image: img3,
    },
  ];
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
        {data.map(({ id, title, desc, image }) => {
          return (
            <div id={id} className="card border rounded bg-light">
              <div className="card-body">
                <div className="img-fluid mb-4">
                  <img src={image} alt="DA sec_logo" />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DA_services;
