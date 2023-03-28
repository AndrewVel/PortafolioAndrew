import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio2">
      {/* heading */}
      <span className="letrasMobile" style={{ color: darkMode ? "white" : "" }}>
        Sobre Mi
      </span>
      <div className="experience" id="experience">
        <div>
          <h1 style={{ color: darkMode ? "white" : "" }}>Sobre Mi</h1>

          <di className="circles">
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
                1+
              </div>
              <span style={{ color: darkMode ? "white" : "" }}>años</span>
              <span>Mobile Developer</span>
            </div>
          </di>
        </div>
        <div
          className="glassLanding"
          style={{
            overflow: "auto",
            maxHeight: "400px",
            background: darkMode ? "black" : "",
          }}
        >
          <p className="textolandig1">
            ¿Alguna vez te has preguntado cómo las tecnologías pueden resolver
            los problemas más comunes?🤔
          </p>
          <p className="textolandig2">
            ¡Hola! Soy Andrés Velata, un ingeniero TI apasionado por la
            resolución de problemas y el uso de la tecnología para mejorar la
            vida de las personas 🤗. Durante los últimos 8 años, he trabajado
            como Asistente TI, donde he utilizado mis habilidades en tecnología
            y mi experiencia en la resolución de problemas para mejorar la
            eficiencia y la productividad de la empresa. A lo largo de mi
            carrera, he desarrollado habilidades en diferentes tecnologías,
            incluyendo React, Flutter y Node.js, y me he destacado por mi
            compromiso con la excelencia en el trabajo y mi capacidad para
            trabajar en equipo.
          </p>
          <p className="textolandig3">
            Ahora estoy buscando dar el siguiente paso en mi carrera y enfocarme
            en mi pasión por la programación 🤩. Si buscas un desarrollador Full
            Stack comprometido, apasionado y con experiencia en la resolución de
            problemas, no dudes en contactarme 🤝.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
