import { useNavigate } from "react-router-dom";
import "./HeroBanner.css";

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
          <p>
            Your browser doesn't support HTML5 video. Here is a{" "}
            <a href="./assets/videos/beats-video.mp4">link to the video</a>{" "}
            instead.
          </p>
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
