import "./DA_Footer.css";
import React from "react";
import logo from "../../assets/logo-no-background.png";
const DA_Footer = () => {
  return (
    <footer className="DA_Footer_M bg-light">
      <div className="DA_Footer_container">
        <div className="DA_Footer_logo">
          <div className="img-fluid">
            <img src={logo} alt="logo" />
          </div>
          <button className="btn btn-primary">Become a Partner</button>
        </div>
        <div className="DA_Footer_M_list">
          <div className="h3_rel">
            <h3>Solutions</h3>
          </div>
          <ul>
            <li>Data Analysis</li>
            <li>Power Bi</li>
            <li>Business Intelligence</li>
            <li>Big Data</li>
            <li>Vision Analysis</li>
          </ul>
        </div>
        <div className="DA_Footer_M_list">
          <div className="h3_rel">
            <h3>Solutions</h3>
          </div>
          <ul>
            <li>Data Analysis</li>
            <li>Power Bi</li>
            <li>Business Intelligence</li>
            <li>Big Data</li>
            <li>Vision Analysis</li>
          </ul>
        </div>
        <div className="DA_Footer_M_list">
          <div className="h3_rel">
            <h3>Solutions</h3>
          </div>
          <ul>
            <li>Data Analysis</li>
            <li>Power Bi</li>
            <li>Business Intelligence</li>
            <li>Big Data</li>
            <li>Vision Analysis</li>
          </ul>
        </div>
      </div>
      <div className="DA_Footer_rights">
        <h4>© 2023 DataToBizTM All Rights Reserved</h4>
      </div>
    </footer>
  );
};

export default DA_Footer;
