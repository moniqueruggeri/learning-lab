import React, { useState } from "react";
import Button from "./Button";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <i className="material-icons menuIcon" onClick={toggleMenu}>
        menu
      </i>
      <nav className={`menuList ${isMenuOpen ? "open" : "closed"}`}>
        <Button text="A Experiência" className="menuItem" link="/experiencia" />

        <Button text="Mapa de Setores" className="menuItem" link="/mapadesetores"/>

        <Button text="Ingresso" className="menuItem" link="/ingresso" />

        <Button text="Faq" className="menuItem" link="/faq"/>
      </nav>
    </>
  );
};

export default Menu;
