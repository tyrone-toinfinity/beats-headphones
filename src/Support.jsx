import { useNavigate } from "react-router-dom";
import { Footer, HeroBanner, Navbar } from "./index";
import "./Support.css";

export const Support = ({ navRef, scrollToNav }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar navRef={navRef} />
      <main className="supportContainer">
        {" "}
        <h1 className="supportHeader">beats support</h1>
        <div className="support__links">
          <div className="support__card">
            <figure onClick={() => navigate("/")}>
              <img
                className="support__img"
                src="public/assets/Others/support-headphones.png"
                alt="headphone image"
              />
              <figcaption>HEADPHONES</figcaption>
            </figure>
            <ul className="support__options">
              <li>SOLO PRO</li>
              <li>STUDIO WIRELESS</li>
              <li>SOLO WIRELESS</li>
              <li>BEATS EP</li>
              <li>BEATS PRO</li>
            </ul>
          </div>
          <div className="support__card">
            <figure onClick={() => navigate("/")}>
              <img
                className="support__img"
                src="public/assets/Others/support-earbuds.png"
                alt="headphone image"
              />
              <figcaption>EARBUDS</figcaption>
            </figure>
            <ul className="support__options">
              <li>BEATS FIT PRO</li>
              <li>BEATS STUDIO BUDS</li>
              <li>BEATS FLEX</li>
              <li>POWERBEATS</li>
              <li>POWERBEATS PRO</li>
              <li>BEATSX</li>
              <li>URBEATS</li>
            </ul>
          </div>
          <div className="support__card">
            <figure onClick={() => navigate("/")}>
              <img
                className="support__img"
                src="public/assets/Others/support-speakers.png"
                alt="headphone image"
              />
              <figcaption>SPEAKERS</figcaption>
            </figure>
            <ul className="support__options">
              <li>BEATS PILL+</li>
            </ul>
          </div>
        </div>
      </main>
      <hr className="support__line" />

      <Footer scrollToNav={scrollToNav} />
    </div>
  );
};
