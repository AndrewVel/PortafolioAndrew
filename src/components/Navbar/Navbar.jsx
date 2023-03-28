import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar" spy={true} smooth={true}>
      {/* left */}
      <div className="n-left">
        <Toggle />
        <div className="n-name">AndrewDev</div>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link to="Intro" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
                Servicios
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true}>
                Portafolio
              </Link>
            </li>
            <li>
              <Link to="experience" spy={true} smooth={true}>
                Sobre Mi
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
          <button className="button n-button">Contacto</button>
        </Link>
      </div>
    </div>
  );
};

export default navbar;
