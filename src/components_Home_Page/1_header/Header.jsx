import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import logo from "./logo-no-background-white.png";

const Header = () => {
  const navigate = useNavigate();

  const navigateContact = () => {
    navigate("/contact");
  };

  const navigateFounder = () => {
    navigate("/founder");
  };

  const navigateHome = () => {
    navigate("/TechPolaris-Company-Website");
  };

  const navigateAboutUs = () => {
    navigate("/aboutUs");
  };

  const navigate3DPage = () => {
    navigate("/3DPage");
  };

  const navigateDataAnalysis = () => {
    navigate("/DataAnalysis");
  };

  const navigateNewsPage = () => {
    navigate("/NewsPage");
  };

  const navigateWebDev = () => {
    navigate("/WebDev");
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
      id="nav_header"
    >
      <div className="container-fluid">
        <button
          className="navbar-brand m-0 p-0"
          id="logo-container"
          onClick={navigateHome}
        >
          <img src={logo} alt="TechPolaris logo" />
        </button>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button
                className="nav-link"
                aria-current="page"
                onClick={navigateAboutUs}
              >
                About Us
              </button>
            </li>
            <li className="nav-item dropdown">
              <div className="dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/contact"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu mt-0 py-0"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={navigateWebDev} className="dropdown-item">
                      Web Development
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button onClick={navigate3DPage} className="dropdown-item">
                      3D Design & Printing
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <button
                      onClick={navigateDataAnalysis}
                      className="dropdown-item"
                    >
                      Data Analytics
                    </button>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={navigateNewsPage}>
                News & Updates
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link"
                aria-current="page"
                onClick={navigateFounder}
              >
                TechPolaris Founder
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={navigateContact}>
                Contact
              </button>
            </li>
          </ul>
          <div className="social">
            <i
              className="bi bi-linkedin text-secondary px-2 fs-5 link-light"
              alt="LinkedIn"
            ></i>
            <i
              className="bi bi-youtube text-secondary px-2 fs-5 link-light"
              alt="YouTube"
            ></i>
            <i
              className="bi bi-twitter text-secondary px-2 fs-5 link-light"
              alt="Twitter"
            ></i>
          </div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
