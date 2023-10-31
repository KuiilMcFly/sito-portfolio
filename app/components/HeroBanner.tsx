import React from "react";
import "../styles/heroBannerStyle/heroBannerStyle.css";

export const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <div className="hero-title">
        <h1>Carmine Esposito</h1>
        <h2>Front-End Developer</h2>
        <p>
          I'm a Front-End Developer based in Italy, I have 1 year of experience
          and I specialize in creating Web Apps.
        </p>
        <button>Discover More</button>
      </div>
    </div>
  );
};