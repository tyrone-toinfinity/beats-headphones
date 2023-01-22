import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";
import { useEffect, useRef } from "react";

export const HeroBanner = () => {
  const navigate = useNavigate();

  const isMobile = /iPad|iPhone|iPod|Android/.test(navigator.userAgent);

  return (
    <main className="hero-banner-container">
      <div className="banner-wrapper">
        <video
          muted={isMobile ? false : true}
          playsinline={!isMobile}
          loop
          autoPlay
          className="heroVideo"
        >
          <source src="./assets/videos/beats-video.mp4" type="video/mp4" />
        </video>

        <div className="containerLandingText">
          <h1>LEBRON & BRONNY</h1>
          <p>Powered by Beats Fit Pro</p>

          <div className="btn-Hero">
            <button
              className="btn-01"
              role="button"
              onClick={() => navigate("/shop")}
            >
              shop
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
