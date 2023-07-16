import React from "react";
import "./DA_sec_banner.css";
import img from "../../assets/3rd-fold.svg.png";
const DA_sec_banner = () => {
  return (
    <div className=" DA_sec_banner_container ">
      <div>
        <h1>Want to know more about how data analytics can help you?</h1>
        <button className="btn">Let's Talk</button>
      </div>
      <div className="img-fluid">
        <img src={img} alt="DA sec_logo" />
      </div>
    </div>
  );
};

export default DA_sec_banner;
