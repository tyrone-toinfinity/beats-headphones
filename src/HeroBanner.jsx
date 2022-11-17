import React from "react";
import { Routes, Link } from "react-router-dom";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <main className="hero-banner-container">
      <div className="banner-wrapper">
        <video src="./assets/videos/beats-video.mp4" autoPlay loop muted />

        <div className="contaienrText">
          <h1>LEBRON & BRONNY</h1>
          <p>Powered by Beats Fit Pro</p>

          <div className="btn-Hero">
            <Link to="">
              <button className="btn-01" role="button">
                shop
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroBanner;
