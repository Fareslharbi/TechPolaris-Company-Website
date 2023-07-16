import React from "react";
import "./DA_banner.css";
import img1 from "../../assets/Asset-1.png";
const DA_banner = () => {
  return (
    <div className=" DA_banner_container ">
      <img src={img1} alt="DA logo" />
      <div className="container DA_banner_info">
        <h1>DATA ANALYTICS</h1>
        <h4>
          Bring More Preciseness In Your Business Decision Making Process With
          Data Analytics
        </h4>
        <p>
          Are you tired of taking time-consuming yet instinct-based decisions?
          Are you looking to improve your decision-making process? If yes,
          implementing the right data analytics mechanism will help. We at
          DataToBiz can help you bring a suitable data analytics mechanism to
          your business.
        </p>
        <button className="btn rounded">Contact Us</button>
      </div>
    </div>
  );
};

export default DA_banner;
