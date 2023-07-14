import React from "react";
import "./Web_Main_Banner.css";

const Web_Main_Banner = () => {
  return (
    <div className="position-relative Web_Main_Banner">
      <img
        src="https://picsum.photos/2000/300"
        alt="dfvf"
        className="d-block w-100 mt-5 pt-4"
      />
      <p
        id="banner_id"
        className="text-overlay fw-bold fs-2 position-absolute top-50 start-50 translate-middle text-light"
      >
        Strategic Website Design for 2023
      </p>
    </div>
  );
};

export default Web_Main_Banner;
