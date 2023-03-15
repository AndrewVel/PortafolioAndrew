import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FitU from "../../img/fit u.png";
import CountriesPi from "../../img/COUNTRIES PI.png";
import RYM from "../../img/RYM.png";
import Guano from "../../img/GUNAO.png";
import { themeContext } from "../../Context";
import { Button } from "react-scroll";
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
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a
            href="https://final-henry-g6.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FitU} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://pi-countries-andrew.up.railway.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={CountriesPi} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://rick-y-morty-andredev.up.railway.app/home"
            target="_blank"
            rel="noreferrer"
          >
            <img src={RYM} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a
            href="https://play.google.com/store/apps/details?id=com.guanoturistico.guano_turistico&hl=es&fbclid=IwAR3LM8cLRugXKOavoEihRHJXie5TqYOnAtq2BHZGQ2pj6e_InDaN7d2e7Lw"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Guano} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
