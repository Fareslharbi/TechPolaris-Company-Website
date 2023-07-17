import "./DA_WhyUS.css";
import React from "react";
import img from "../../assets/expert-team.png-.png.webp";
import img1 from "../../assets/efficient-latest-tech-stack.png-.png.webp";
import img2 from "../../assets/support-facility.png-.png.webp";
const DA_WhyUS = () => {
  return (
    <div className="DA_WhyUS_container">
      <h1>Reasons To Choose DataToBiz</h1>
      <h4>For Data Analytics Service</h4>
      <p>
        DataToBiz is one of the top data analytics companies. Some of the major
        reasons are
      </p>
      <div className="DA_WhyUS_info">
        <div className="WhyUS_card">
          <div className="img-fluid shadow">
            <img src={img} alt="first card" />
          </div>
          <div className="WhyUS_card_info p_pad_lef">
            <h3>Experienced Team</h3>
            <p>
              We at DataToBiz have a team of efficient and experienced data
              analysts who can deliver agile data analytics solutions for your
              company.
            </p>
          </div>
        </div>
        <div className="WhyUS_card">
          <div className="WhyUS_card_info">
            <h3>Efficient Tech Stack</h3>
            <p>
              We have the best and latest tech stack to help you build a
              competent data analytics solution for your company.
            </p>
          </div>
          <div className="img-fluid shadow">
            <img src={img1} alt="first card" />
          </div>
        </div>
        <div className="WhyUS_card">
          <div className="img-fluid shadow">
            <img src={img2} alt="first card" />
          </div>
          <div className="WhyUS_card_info p_pad_lef">
            <h3>Excellent Support Facility</h3>
            <p>
              We have a dedicated team of support staff who ensure that the
              installed data analytics solution is working efficiently, without
              any issues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DA_WhyUS;
