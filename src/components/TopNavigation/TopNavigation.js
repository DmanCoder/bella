import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./TopNavigation.scss";

const TopNavigation = () => {
  return (
    <React.Fragment>
      {/* Logo */}
      <div className="logo">
        <span className="logo__img"></span>
        <span className="logo__text">Bella</span>
      </div>

      {/* Main navigation with list items */}
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__list-item">
            <a href="#0" className="nav__list-anchor">
              Our Values
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#0" className="nav__list-anchor">
              Portfolio
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#0" className="nav__list-anchor">
              Blog
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#0" className="nav__list-anchor">
              How We Work
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#0" className="nav__list-anchor">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
    </React.Fragment>
  );
};

export default TopNavigation;
