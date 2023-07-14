import React, { useRef, useState, useEffect } from "react";
import "./TrackRecord.css";
const TrackRecord = () => {
  const percentageElements = useRef([]);
  const [percentage, setPercentage] = useState(0);

  const yearsOfExperience = useRef([]);
  const [yearsOfExperienceNum, setYearsOfExperienceNum] = useState(0);

  const professionalsServed = useRef([]);
  const [professionalsServedNum, setProfessionalsServedNum] = useState(0);

  useEffect(() => {
    const animatePercentage = () => {
      if (percentage <= 100) {
        percentageElements.current.forEach((element) => {
          element.textContent = `${percentage}%`;
        });
        setPercentage((prevPercentage) => prevPercentage + 1);
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationId = setTimeout(animatePercentage, 100); // Adjust the delay duration here (in milliseconds)
          return () => {
            clearTimeout(animationId);
          };
        }
      });
    }, options);

    percentageElements.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [percentage]);

  useEffect(() => {
    const animateYearsOfExperience = () => {
      if (yearsOfExperienceNum <= 10) {
        yearsOfExperience.current.forEach((element) => {
          if (element) {
            element.textContent = `${yearsOfExperienceNum}`;
          }
        });
        setYearsOfExperienceNum(
          (prevYearsOfExperienceNum) => prevYearsOfExperienceNum + 1
        );
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationId = setTimeout(animateYearsOfExperience, 100); // Adjust the delay duration here (in milliseconds)
          return () => {
            clearTimeout(animationId);
          };
        }
      });
    }, options);

    yearsOfExperience.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [yearsOfExperienceNum]);

  useEffect(() => {
    const animateProfessionalsServed = () => {
      if (professionalsServedNum <= 128) {
        professionalsServed.current.forEach((element) => {
          if (element) {
            element.textContent = `${professionalsServedNum}`;
          }
        });
        setProfessionalsServedNum(
          (prevProfessionalsServedNum) => prevProfessionalsServedNum + 1
        );
      }
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold value as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const animationId = setTimeout(animateProfessionalsServed, 100); // Adjust the delay duration here (in milliseconds)
          return () => {
            clearTimeout(animationId);
          };
        }
      });
    }, options);

    yearsOfExperience.current.forEach((element) => {
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [professionalsServedNum]);

  return (
    <div className="position-relative">
      <img
        src="https://picsum.photos/2000/600"
        alt="dfvf"
        className="d-block w-100"
      />
      <div className="card-group position-absolute top-50 start-50 translate-middle gap-3 row">
        <div className="card rounded bg-transparent border-start border-light d-flex align-items-center flex-column py-5 gap-2">
          <div
            className="d-flex align-items-center flex-column text-light bg-primary px-4 rounded bg-opacity-75"
            id="card-experience"
          >
            <div
              ref={(el) => (professionalsServed.current[2] = el)}
              className="percentage text-center fs-2"
            >
              0
            </div>
            <p className="text-light mb-1 mt-2">PROFESSIONALS SERVED</p>
          </div>
          <p className="text-light bg-primary bg-opacity-75 m-2 rounded p-1 text-center">
            Proudly serving business professionals in various fields including
            healthcare, tech, and entertainment.
          </p>
        </div>
        <div className="card rounded bg-transparent border-start border-light ms-1 d-flex align-items-center flex-column py-5 gap-2">
          <div
            className="d-flex align-items-center flex-column text-light bg-primary px-4 rounded bg-opacity-75"
            id="card-experience"
          >
            <div
              ref={(el) => (percentageElements.current[2] = el)}
              className="percentage text-center fs-2"
            >
              0%
            </div>
            <p className="text-light mb-1 mt-2">SATISFACTION RATE</p>
          </div>
          <p className="text-light bg-primary bg-opacity-75 m-2 rounded p-1 text-center">
            We cater to the needs and budgets of our clients and work tirelessly
            to get them the results they deserve.s.
          </p>
        </div>
        <div className="card rounded bg-transparent border-start border-light ms-1 d-flex align-items-center flex-column py-5 gap-2">
          <div
            className="d-flex align-items-center flex-column text-light bg-primary px-4 rounded bg-opacity-75"
            id="card-experience"
          >
            <div
              ref={(el) => (yearsOfExperience.current[2] = el)}
              className="percentage text-center fs-2"
            >
              0%
            </div>
            <p className="text-light mb-1 mt-2">YEARS OF EXPERIENCE</p>
          </div>
          <p className="text-light bg-primary bg-opacity-75 m-2 rounded p-1 text-center">
            We never stop learning and always strive to remain at the forefront
            of innovative online marketing trends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrackRecord;
