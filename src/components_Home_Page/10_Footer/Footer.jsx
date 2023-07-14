import React from "react";
import "./Footer.css";
import { FiTwitter } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import footer_logo from "./logo-no-background-white.png";
const Footer = () => {
  const dict_departments = [
    { id: 1, department: "Web Development" },
    { id: 2, department: "Data Analytics" },
    { id: 3, department: "3D Design & Printing" },
    { id: 4, department: "Photography & Videography" },
    { id: 5, department: "News & Updates" },
    { id: 6, department: "TechPolaris Founder" },
    { id: 7, department: "Contact" },
    { id: 8, department: "Careers" },
  ];
  return (
    <div id="tech_main_div">
      <a href="/#" className="tech_footer_logo">
        <img src={footer_logo} alt="footer_logo" />
      </a>
      <ul className="tech_permalinks">
        {dict_departments.map(({ id, department }) => {
          return (
            <li>
              <a id={id} href="#about" className="tech_lang_about">
                {department}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="tech_footer__socials">
        <a href="https://linkedin.com">
          <BsLinkedin />
        </a>
        <a href="https://github.com">
          <FaGithub />
        </a>
        <a href="https://twitter.com/FaresLharbi">
          <FiTwitter />
        </a>
      </div>
      <div className="tech_footer__copyright">
        <small className="tech_lang_rights">
          &copy; TechPolaris Comapny. All right reserved.
        </small>
      </div>
    </div>
  );
};

export default Footer;
