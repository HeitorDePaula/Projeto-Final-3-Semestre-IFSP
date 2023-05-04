import React from 'react'
import Navbar from './Navbar';
import BannerImage from "../img/banner.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src="banner"  alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Agendamentos da sua barbearia na palma da sua mão!
          </h1>
          <p className="primary-text">
          Entre em nosso Dashboard e receba o plano Start por 2 Semanas!
          </p>
          <button className="secondary-button">
            Teste Grátis <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home