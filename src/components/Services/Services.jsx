import React, { useContext } from "react";
import "./Services.css";

import comunicacion from "../../img/comunicacion.png";
import equipo from "../../img/equipo.png";
import solucion from "../../img/solucion.png";
import { themeContext } from "../../Context";
import Resume from "./Andres Velata CV.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome2">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Mis Habilidades</span>
        <span>y Actitudes</span>
        <span>
          Aquí podrás conocer más acerca de mis habilidades técnicas
          <br />y mis habilidades
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        <div>
          <h1 className="softTitle">Soft Skills</h1>
          <div className="divSoft">
            <img src={solucion} alt="" />
            <span>Resolucion de Problemas</span>
          </div>
          <div className="divSoft">
            <img src={equipo} alt=""></img>
            <span>Trabajo en Equipo</span>
          </div>
          <div className="divSoft">
            <img src={comunicacion} alt=""></img>
            <span>Comunicacion Efectiva</span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="skillsAll">
        <h3 className="softTitle">Principales Tech Skills</h3>
        <div className="principalesTech">
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width="40"
              height="40"
            />
          </a>
          <a href="https://flutter.dev" target="_blank" rel="noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
              alt="flutter"
              width="40"
              height="40"
            />
          </a>
          <a href="https://nodejs.org" target="_blank" rel="noreferrer">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width="40"
              height="40"
            />
          </a>
        </div>

        <h3 className="softTitle2">Otras Tech Skills</h3>
        <div className="otrasSoft">
          <p align="left">
            <a
              href="https://developer.android.com"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/android/android-original-wordmark.svg"
                alt="android"
                width="40"
                height="40"
              />
            </a>
            <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                alt="bootstrap"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.w3schools.com/cpp/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg"
                alt="cplusplus"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.w3schools.com/cs/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg"
                alt="csharp"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
            </a>
            <a href="https://dart.dev" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg"
                alt="dart"
                width="40"
                height="40"
              />
            </a>
            <a href="https://expressjs.com" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
                alt="figma"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="40"
                height="40"
              />
            </a>

            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.adobe.com/in/products/illustrator.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
                alt="illustrator"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.adobe.com/in/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
                alt="photoshop"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.corel.com/en/?utm_source=cj&utm_medium=affiliate&utm_campaign=Incubeta+-+PPC+GBP&gclsrc=aw.ds&AID=12099146&PID=2016554&SID=jkp_Cj0KCQjwtsCgBhDEARIsAE7RYh2Ov-09H3G6AKr4QXJPH64vmU7sys7_wBw0NqD-tedD-pUSCYIgoTIaAmgBEALw_wcB&cjevent=fd6802e9c2fa11ed80889bb40a82b820&x-vehicle=cj"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://seeklogo.com/images/C/coreldraw-2019-logo-0B7C036A0A-seeklogo.com.png"
                alt="photoshop"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
            </a>
            <a href="https://jestjs.io" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                alt="jest"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.mathworks.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png"
                alt="matlab"
                width="40"
                height="40"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                alt="mysql"
                width="40"
                height="40"
              />
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg"
                alt="nextjs"
                width="40"
                height="40"
              />
            </a>

            <a
              href="https://www.postgresql.org"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                alt="postgresql"
                width="40"
                height="40"
              />
            </a>
            <a href="https://postman.com" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="40"
                height="40"
              />
            </a>

            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                alt="typescript"
                width="40"
                height="40"
              />
            </a>
            <a href="https://unity.com/" target="_blank" rel="noreferrer">
              <img
                src="https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
                alt="unity"
                width="40"
                height="40"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
