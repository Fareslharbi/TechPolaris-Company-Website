import "./DA_Extra.css";
import React from "react";
import img from "../../assets/functionalities2.png";
import img1 from "../../assets/second.png";
import img2 from "../../assets/components1.png";
import img3 from "../../assets/components-2.png";
const DA_Extra = () => {
  return (
    <div className="DA_Extra_container">
      <h1>Want to find out more about what we can do for you?</h1>
      <p>
        We provide a full-stack data analytics consulting and solutions to
        empower companies with the process of informed decision making when it
        comes to different areas of functionalities.
      </p>
      <h3>Functionalities</h3>
      <div className="img-fluid">
        <img src={img} alt="img" />
        <img src={img1} alt="img" />
      </div>
      <h3>Components</h3>
      <div className="img-fluid">
        <img src={img2} alt="img" />
        <img src={img3} alt="img" />
      </div>
    </div>
  );
};

export default DA_Extra;
