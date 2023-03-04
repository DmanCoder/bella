import React from "react";
import { Link } from "react-router-dom";

// Custom hooks
import useAnimateAnchorLink from "./useAnimateAnchorLink";
import useAnimateNavigationOnScroll from "./useAnimateNavigationOnScroll";

// Styles
import "./TopNavigation.scss";

const TopNavigation = () => {
  const { onMouseLeave, currentHoverLink } = useAnimateAnchorLink();
  const { addAnchorLinkItemsToRefs } = useAnimateNavigationOnScroll();

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
            <Link
              ref={addAnchorLinkItemsToRefs}
              onMouseLeave={onMouseLeave}
              data-nav="about"
              to="/about"
              className={`nav__list-anchor ${
                currentHoverLink === "about" ? "animate-out" : ""
              }`}
            >
              Our Values
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              ref={addAnchorLinkItemsToRefs}
              onMouseLeave={onMouseLeave}
              data-nav="portfolio"
              to="/portfolio"
              className={`nav__list-anchor ${
                currentHoverLink === "portfolio" ? "animate-out" : ""
              }`}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              ref={addAnchorLinkItemsToRefs}
              onMouseLeave={onMouseLeave}
              data-nav="blog"
              to="/blog"
              className={`nav__list-anchor ${
                currentHoverLink === "blog" ? "animate-out" : ""
              }`}
            >
              Blog
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              ref={addAnchorLinkItemsToRefs}
              onMouseLeave={onMouseLeave}
              data-nav="works"
              to="/works"
              className={`nav__list-anchor ${
                currentHoverLink === "works" ? "animate-out" : ""
              }`}
            >
              How We Work
            </Link>
          </li>
          <li className="nav__list-item">
            <Link
              ref={addAnchorLinkItemsToRefs}
              onMouseLeave={onMouseLeave}
              data-nav="contact"
              to="/about"
              className={`nav__list-anchor ${
                currentHoverLink === "contact" ? "animate-out" : ""
              }`}
            >
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
