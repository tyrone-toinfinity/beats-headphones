import { useNavigate } from "react-router-dom";
import "./Support.css";

export const Support = () => {
  const navigate = useNavigate();
  return (
    <div>
      <main className="supportContainer">
        {" "}
        <h1 className="supportHeader">beats support</h1>
        <div className="support__links">
          <div className="support__card">
            <figure onClick={() => navigate("/")}>
              <img
                className="support__img"
                src="assets/404/support-headphones.webp"
                alt="headphone image"
                width={400}
                height={400}
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
                src="assets/404/support-earbuds.webp"
                alt="headphone image"
                width={400}
                height={400}
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
                src="assets/404/support-speakers.webp"
                alt="headphone image"
                width={352}
                height={400}
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
    </div>
  );
};
