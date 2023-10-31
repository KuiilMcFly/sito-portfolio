"use client";
import "../styles/headerStyle/headerStyles.css";
import { useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Header() {
  let [Hamburger, setHamburger] = useState(false);

  const openHamburger = () => {
    setHamburger(!Hamburger);
    console.log(Hamburger);
  };

  const menuAnimationClass = Hamburger
    ? "hamburger-menu slide-right"
    : "hamburger-menu slide-left";

  return (
    <div className="header-bar">
      <img
        onClick={openHamburger}
        className="logo"
        src="/logoCarmineEsposito.png"
        alt=""
      />
      <div className={menuAnimationClass}>
        {Hamburger && <HamburgerMenu hamburger={Hamburger} />}
      </div>
      <div className="about-work">
        <a href="#">Skills</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </div>
      <div className="links">
        <a href="https://github.com/KuiilMcFly">
          <img src="/github.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/esposito-carmine/">
          <img src="linkedin.png" alt="" />
        </a>
      </div>
    </div>
  );
}
