import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";

export const HeroBanner = () => {
  const navigate = useNavigate();
  return (
    <main className="hero-banner-container">
      <div className="banner-wrapper">
        <video playsInline loop muted autoPlay className="heroVideo">
          <source src="./assets/videos/beats-video.mp4" type="vide/mp4" />
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
