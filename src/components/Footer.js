import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <ul>
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#myworklist">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact</a>
          </li>
         
        </ul>
        <div className="bottom">
          <span className="line"></span>
          <p>Thanks For Coming</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
