import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio2" id="portfolio">
      {/* heading */}
      <h1 style={{ color: darkMode ? "white" : "" }}>Experiencia</h1>
      <div className="experience" id="experience">
        <div className="achievement">
          {/* darkMode */}
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            8+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>años</span>
          <span>Asistente TI </span>
        </div>
        <div className="achievement">
          {/* darkMode */}
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            1+
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>años</span>
          <span>Full Stack Developer</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            5
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>proyectos</span>
          <span>Propios</span>
        </div>
        <div className="achievement">
          <div
            className="circle"
            style={{ color: darkMode ? "var(--orange)" : "" }}
          >
            2
          </div>
          <span style={{ color: darkMode ? "white" : "" }}>proyectos</span>
          <span>Grupales</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
