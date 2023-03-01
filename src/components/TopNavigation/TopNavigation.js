import React from "react";
import { Link } from "react-router-dom";

// Styles
import "./TopNavigation.scss";

const TopNavigation = () => {
  return (
    <React.Fragment>

      {/* Main navigation menu */}
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
            <a href="#0" className="nav__list-anchor animate-out">
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
    </React.Fragment>
  );
};

export default TopNavigation;
