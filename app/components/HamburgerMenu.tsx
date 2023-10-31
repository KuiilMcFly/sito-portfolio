import React from "react";
import "../styles/hamburgerStyle/hamburgerStyles.css";
export const HamburgerMenu = ({ hamburger }: { hamburger: boolean }) => {
  const menuAnimationClass = hamburger ? "slide-left" : "slide-right";

  return (
    <div className={`hamburger-menu ${menuAnimationClass}`}>
      <div className="hamburger-list-container">
        <a href="">Skills</a>
        <a href="">Projects</a>
        <a href="">Contacts</a>
      </div>
    </div>
  );
};
