import React, { useEffect, useRef } from "react";
import "./Testimonial.css";
import testi_img from "./Edward-Review-150x150.jpg";
import testi_img1 from "./Priti-S-Review-150x150.jpg";
const Testimonial = () => {
  const buttonRef = useRef(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      buttonRef.current.click();
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div id="c2" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img
            src="https://picsum.photos/2000/550"
            alt="dfdc"
            class="d-block w-100"
            id="testimonial_bg_img"
          />
          <div class="overlay-text1">
            <p>
              Eddi transformed our Tenafly Pediatrics website into a sleek,
              mobile-friendly and aesthetic website that we are proud to have
              for our patients. As a large, multi-office practice, I knew there
              were multiple pages and aspects that would need attention and he
              tackled the project with enthusiasm. We also used him for SO
              services and we saw a huge jump in our website's views and clicks,
              which corresponds to our increased calls from expectant parents.
              Highly recommended!
            </p>
            <img src={testi_img} alt="fvd 1" class="img-fluid" />
            <p class="h3">Ahmed Al Sayeed</p>
            <p class="h4">Doctor</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img
            src="https://picsum.photos/2000/550"
            alt="dfvf"
            class="d-block w-100"
            id="testimonial_bg_img"
          />
          <div class="overlay-text1">
            <p>
              Eddi transformed our Tenafly Pediatrics website into a sleek,
              mobile-friendly and aesthetic website that we are proud to have
              for our patients. As a large, multi-office practice, I knew there
              were multiple pages and aspects that would need attention and he
              tackled the project with enthusiasm. We also used him for SO
              services and we saw a huge jump in our website's views and clicks,
              which corresponds to our increased calls from expectant parents.
              Highly recommended!
            </p>
            <img src={testi_img1} alt="fvd 1" class="img-fluid" />
            <p class="h3">Ahmed Al Sayeed</p>
            <p class="h4">Doctor</p>
          </div>
        </div>
      </div>
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#c2"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#c2"
          data-bs-slide-to="1"
        ></button>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#c2"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
        <span class="visually-hidden" aria-hidden="true">
          Previous
        </span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#c2"
        data-bs-slide="next"
        ref={buttonRef}
      >
        <span class="carousel-control-next-icon"></span>
        <span class="visually-hidden" aria-hidden="true">
          Next
        </span>
      </button>
    </div>
  );
};

export default Testimonial;
