import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="position-relative">
      <img
        src="https://picsum.photos/2000/300"
        alt="dfvf"
        className="d-block w-100"
      />
      <p
        id="banner_id"
        className="text-overlay fw-bold position-absolute top-50 start-50 translate-middle text-light"
      >
        BE PRESENTABLE | BE VISIBLE | BE PROFITABLE
      </p>
    </div>
  );
};

export default Banner;
