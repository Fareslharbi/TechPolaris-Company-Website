import React, { useEffect, useRef } from "react";
import "./Swiper.css";

const Swiper = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      buttonRef.current.click();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="c1"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="5000">
          <img
            src="https://picsum.photos/2000/900"
            alt="fvd 1"
            className="img-fluid"
          />
          <div className="overlay-text">
            <p className="h1">Welcome to TechPolaris</p>
            <p className="h5">Let's Take Your Goals to the Next Level</p>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="https://picsum.photos/2000/900"
            alt="dfvf"
            className="d-block w-100"
          />
          <div className="overlay-text">
            <p className="h1">Innovative Marketing Solutions</p>
            <p className="h5">SEO | Web Design | Promotional Strategy</p>
            <button className="btn btn-dark">Get Started</button>
          </div>
        </div>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#c1"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#c1"
          data-bs-slide-to="1"
        ></button>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#c1"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
        <span className="visually-hidden" aria-hidden="true">
          Previous
        </span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#c1"
        data-bs-slide="next"
        ref={buttonRef}
      >
        <span className="carousel-control-next-icon"></span>
        <span className="visually-hidden" aria-hidden="true">
          Next
        </span>
      </button>
    </section>
  );
};

export default Swiper;
