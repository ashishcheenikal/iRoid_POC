import React from "react";
import Logo from "../../assets/Logo.jsx";
import "./style.scss";

function Header() {
  return (
    <div className="headerSection">
      <div className="headerNavBar">
        <div className="logo">
          <Logo />
        </div>
        <div className="navBarSection">
          <ul>
            <li>
              <span>Solutions</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>Platform</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>Industries</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>Featured Insights</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>About Us</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>Careers</span>
              <span className="arrow-down"></span>
            </li>
            <li>
              <span>Our Work</span>
              <span className="arrow-down"></span>
            </li>
          </ul>
        </div>
        <div className="consultationBtn">
          <span>Free Consultation</span>
        </div>
      </div>
      <div className="headerLinkSection">
        <span>
          Innovative augmented reality solutions for eCommerce businesses -
          <a href="#">View our visual gallery.</a>
        </span>
        <span>
          For a free demo, write to us:
          <a href="#">hello@tulfa.com</a>
        </span>
      </div>
    </div>
  );
}

export default Header;
