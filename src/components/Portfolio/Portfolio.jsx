import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { lista } from "./lista";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>
        Proyectos Recientes
      </span>
      <span>Portafolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        grabCursor={true}
        className="portfolio-slider"
        navigation={true}
      >
        {lista.map((app) => {
          return (
            <SwiperSlide>
              <img src={app.img} alt="" />
              <button
                onClick={() => window.open(app.deploy, "_blank")}
                className="buttonLinkD"
              >
                Deploy
              </button>
              <button
                onClick={() => window.open(app.git, "_blank")}
                className="buttonLinkG"
              >
                GitHub
              </button>
              {app.yt ? (
                <button
                  onClick={() => window.open(app.yt, "_blank")}
                  className="buttonLinkV"
                >
                  Publicacion
                </button>
              ) : (
                ""
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Portfolio;
