import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import img from "./Pediatric-Website.png";

const Portfolio = () => {
  const texts = ["Fully Responsive Design", "Sample Client Portfolio"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  }, [texts.length]);

  return (
    <div className="row my-5 ms-5 me-5">
      <div className="text-container">
        <h1 className="animated-text text-center text-primary">
          {texts[currentTextIndex]}
        </h1>
      </div>
      <div className="card-group m-1 mt-5">
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
      </div>
      <div className="card-group m-1">
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
        <div className="image-container-portfolio card m-2 border-0">
          <img src={img} className="card-img-top" alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
