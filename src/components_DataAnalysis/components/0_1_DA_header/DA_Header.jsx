import "./DA_Header.css";

import React, { useState, useEffect } from "react";
import logo from "../../assets/logo-no-background.png";
const StickyHeader = () => {
  const [scrollY, setScrollY] = useState(0);
  const offset = 100; // Set an offset value to trigger the transition

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerStyle = {
    paddingTop: "4rem",
    display: "flex",
    height: "9rem",
    justifyContent: "center",
    position: "sticky",
    top: scrollY > offset ? "0" : `-${offset - scrollY}px`,
    backgroundColor: "white",
    transition: "top 0.3s ease", // Add transition for smooth effect
  };

  const listGroupStyle = {
    display: "flex",
    gap: "3rem",
  };

  const buttonStyle = {
    position: "absolute",
    right: "18rem",
    bottom: "2.2rem",
    width: "10rem",
    height: "4rem",
    borderRadius: "15px",
  };

  return (
    <header style={headerStyle} className="DA_Header_container">
      <div className="img-fluid">
        <img src={logo} alt="logo" />
      </div>
      <ul style={listGroupStyle} className="DA_Header_list_group">
        <li>About Us</li>
        <li>Services</li>
        <li>News & Updates</li>
        <li>Team</li>
        <li>Contact</li>
      </ul>
      <button style={buttonStyle} className="btn btn-primary">
        Get in Touch
      </button>
    </header>
  );
};

export default StickyHeader;
