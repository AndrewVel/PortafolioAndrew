import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <a href="andres.velata@hotmail.com" target="_blank" rel="noreferrer">
          <span>andres.velata@hotmail.com</span>
        </a>
        <div className="f-icons">
          <a
            href="https://github.com/AndrewVel"
            target="_blank"
            rel="noreferrer"
          >
            <Gitub color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.linkedin.com/in/andres-velata/"
            target="_blank"
            rel="noreferrer"
          >
            <Facebook color="white" size={"3rem"} />
          </a>
          <a
            href="https://www.instagram.com/andres_velata/"
            target="_blank"
            rel="noreferrer"
          >
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
