import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <nav
      id="nav_header"
      class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="dfgfd">
          TechPolaris
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="dfgfd"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </a>
              <ul class="dropdown-menu mt-2" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="dfgfd">
                    Web Development
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="dfgfd">
                    3D Design & Printing
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="dfgfd">
                    Data Science
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="dfgfd">
                    Photography Videography
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="dfgfd">
                News & Update
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="dfgfd">
                TechPolaris Founder
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="dfgfd">
                Contact
              </a>
            </li>
          </ul>
          <div className="social">
            <i class="bi bi-linkedin text-secondary px-2 fs-5 link-light"></i>
            <i class="bi bi-youtube text-secondary px-2 fs-5 link-light"></i>
            <i class="bi bi-twitter text-secondary px-2 fs-5 link-light"></i>
          </div>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Header;
