import React, { useRef, useState, useEffect, useCallback } from "react";
import "./TrackRecord.css";

const TrackRecord = () => {
  const percentageElementRef = useRef(null);
  const yearsOfExperienceElementRef = useRef(null);
  const professionalsServedElementRef = useRef(null);

  const [percentage, setPercentage] = useState(0);
  const [yearsOfExperienceNum, setYearsOfExperienceNum] = useState(0);
  const [professionalsServedNum, setProfessionalsServedNum] = useState(0);

  const animateCounters = useCallback(() => {
    if (percentage <= 99) {
      percentageElementRef.current.textContent = `${percentage}%`;
      setPercentage((prevPercentage) => prevPercentage + 1);
    } else {
      percentageElementRef.current.textContent = "100%";
      setPercentage(100);
    }
    if (yearsOfExperienceNum <= 9) {
      yearsOfExperienceElementRef.current.textContent = `${yearsOfExperienceNum}`;
      setYearsOfExperienceNum(
        (prevYearsOfExperienceNum) => prevYearsOfExperienceNum + 1
      );
    } else {
      yearsOfExperienceElementRef.current.textContent = "10";
      setYearsOfExperienceNum(10);
    }
    if (professionalsServedNum <= 126) {
      professionalsServedElementRef.current.textContent = `${professionalsServedNum}`;
      setProfessionalsServedNum(
        (prevProfessionalsServedNum) => prevProfessionalsServedNum + 1
      );
    } else {
      professionalsServedElementRef.current.textContent = "128";
      setProfessionalsServedNum(128);
    }
  }, [percentage, yearsOfExperienceNum, professionalsServedNum]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationId = setTimeout(animateCounters, 100);
          return () => {
            clearTimeout(animationId);
          };
        }
      });
    }, options);

    if (percentageElementRef.current) {
      observer.observe(percentageElementRef.current);
    }
    if (yearsOfExperienceElementRef.current) {
      observer.observe(yearsOfExperienceElementRef.current);
    }
    if (professionalsServedElementRef.current) {
      observer.observe(professionalsServedElementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [animateCounters]);

  return (
    <div id="img-contain" className="position-relative">
      <img
        src="https://picsum.photos/2000/600"
        alt="dfvf"
        className="img-fluid"
      />

      <div
        id="card-group-track"
        className="card-group position-absolute top-50 start-50 translate-middle gap-5 row text-center"
      >
        <div className="card rounded bg-transparent border-start border-light d-flex  flex-column py-5 gap-2 card-lg">
          <div className="d-flex align-items-center flex-column text-light bg-dark px-4 rounded bg-opacity-75">
            <div
              ref={professionalsServedElementRef}
              className="percentage text-center fs-3"
            >
              0
            </div>
            <p id="textttt" className="text-light mb-1 mt-2">
              PROFESSIONALS SERVED
            </p>
          </div>
          <p className="text-light bg-dark bg-opacity-75 m-2 rounded p-1 text-center">
            Proudly serving business professionals in various fields including
            healthcare, tech, and entertainment.
          </p>
        </div>
        <div className="card rounded bg-transparent border-start border-light ms-1 d-flex align-items-center flex-column py-5 gap-2 card-lg">
          <div className="d-flex align-items-center flex-column text-light bg-dark px-4 rounded bg-opacity-75">
            <div
              ref={percentageElementRef}
              className="percentage text-center fs-3"
            >
              0%
            </div>
            <p className="text-light mb-1 mt-2">SATISFACTION RATE</p>
          </div>
          <p className="text-light bg-dark bg-opacity-75 m-2 rounded p-1 text-center">
            We cater to the needs and budgets of our clients and work tirelessly
            to get them the results they deserve.
          </p>
        </div>
        <div className="card rounded bg-transparent border-start border-light ms-1 d-flex align-items-center flex-column py-5 gap-2 card-lg">
          <div className="d-flex align-items-center flex-column text-light bg-dark px-4 rounded bg-opacity-75">
            <div
              ref={yearsOfExperienceElementRef}
              className="percentage text-center fs-3"
            >
              0
            </div>
            <p className="text-light mb-1 mt-2">YEARS OF EXPERIENCE</p>
          </div>
          <p className="text-light bg-dark bg-opacity-75 m-2 rounded p-1 text-center">
            We never stop learning and always strive to remain at the forefront
            of innovative online marketing trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
