import React from "react";

import Assets from "../../assets";

// Styles
import "./Hero.scss";

const TopNavigation = () => {
  return (
    <header data-color="#ACB7AE" className="hero">
      <h1 className="hero__title">
        <span className="hero__title-text">Consectetur</span>
        <span className="hero__title-text">Adipisicing</span>
        <span className="hero__title-text">Elites</span>
      </h1>

      <p className="hero__subtitle">
        VOLUPTAS AUT <br />& VERITASIS NOSTRUM
      </p>

      <div className="hero__circle"></div>

      <div className="gallery">
        <div className="gallery__item-left">
          <figure className="gallery__figure gallery__figure--l">
            <img src={Assets.Imgs.SunsetLarge} alt="Beautiful" />
          </figure>
          <figure className="gallery__figure gallery__figure--m">
            <img src={Assets.Imgs.LampLarge} alt="test" />
          </figure>
          <figure className="gallery__figure gallery__figure--s">
            <img src={Assets.Imgs.LogCabinLarge} alt="test" />
          </figure>
        </div>

        <div className="gallery__item-right">
          <figure className="gallery__figure gallery__figure--l">
            <img src={Assets.Imgs.LogCabinLarge} alt="test" />
          </figure>
          <figure className="gallery__figure gallery__figure--m">
            <img src={Assets.Imgs.SunsetLarge} alt="test" />
          </figure>
          <figure className="gallery__figure gallery__figure--s">
            <img src={Assets.Imgs.LampLarge} alt="test" />
          </figure>
        </div>
      </div>

      <div className="hero__circular">
        <div className="hero__circular-logo"></div>
      </div>
    </header>
  );
};

export default TopNavigation;
