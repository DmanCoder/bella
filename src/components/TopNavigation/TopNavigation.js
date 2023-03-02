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
            <Link to="/about" className="nav__list-anchor">
              Our Values
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" className="nav__list-anchor">
              Portfolio
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" className="nav__list-anchor">
              Blog
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" className="nav__list-anchor">
              How We Work
            </Link>
          </li>
          <li className="nav__list-item">
            <Link to="/about" className="nav__list-anchor">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hamburger */}
      <div className="burger">
        <button className="burger__wrapper">
          <span className="burger__bar"></span>
          <span className="burger__bar"></span>
          <span className="burger__bar"></span>
        </button>
      </div>
    </React.Fragment>
  );
};

export default TopNavigation;
