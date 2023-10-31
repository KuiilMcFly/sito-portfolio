import React from "react";
import "../styles/heroBannerStyle/heroBannerStyle.css";

export const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-left">
        <div className="hero-title">
          <h1>Carmine Esposito</h1>
          <h2>Front-End Developer</h2>
          <p>
            I'm a Front-End Developer based in Italy, I have 1 year of
            experience and I specialize in creating Web Apps.
          </p>
          <div className="discover-button">Discover More</div>
        </div>
      </div>
      <div className="hero-right">
        <img src="/hero4.jpg" alt="" />
      </div>
    </div>
  );
};
