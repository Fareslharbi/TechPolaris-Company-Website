import React from "react";

const Cards = () => {
  return (
    <div className="row my-5 ms-5 me-5">
      <div className="card-group">
        <div className="card mx-2 rounded">
          <div className="card-body d-flex row">
            <i className="bi bi-pc-display-horizontal text-center fs-1 text-primary"></i>
            <h5 className="card-title text-center">Web Design</h5>
            <p className="card-text text-center">
              We create Search Engine Optimized websites with responsive designs
              visually adapted for mobile, desktop, and tablet devices providing
              your customers with a pleasant and purposeful user experience.
            </p>
            <img
              src="https://picsum.photos/300/200"
              className="card-img-top rounded"
              alt="..."
            />
            <button className="btn btn-dark mt-2">More Information</button>
          </div>
        </div>
        <div className="card mx-2 rounded">
          <div className="card-body d-flex row">
            <i className="bi bi-graph-up-arrow text-center fs-1 text-primary"></i>
            <h5 className="card-title text-center">Data Analytics</h5>
            <p className="card-text text-center">
              We offer comprehensive data analytics services to help you gain
              valuable insights from your data and make data-driven decisions
              for your business.
            </p>
            <img
              src="https://picsum.photos/300/200"
              className="card-img-top rounded"
              alt="..."
            />
            <button className="btn btn-dark mt-2">More Information</button>
          </div>
        </div>
        <div className="card mx-2 rounded">
          <div className="card-body d-flex row">
            <i className="bi bi-badge-3d-fill text-center fs-1 text-primary"></i>
            <h5 className="card-title text-center">3D Design & Printing</h5>
            <p className="card-text text-center">
              We specialize in creating stunning 3D designs and offer
              high-quality 3D printing services. Whether you need prototypes or
              custom-made products, we can bring your ideas to life.
            </p>
            <img
              src="https://picsum.photos/300/200"
              className="card-img-top rounded"
              alt="..."
            />
            <button className="btn btn-dark mt-2">More Information</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
