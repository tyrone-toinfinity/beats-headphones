import { useNavigate } from "react-router-dom";
import { Footer, Navbar } from "./index";
import { FaArrowRight } from "react-icons/fa";
import "./ErrorPage.css";

export const ErrorPage = ({ scrollToNav, navRef }) => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar navRef={navRef} />

      <main className="error__page">
        <div className="header__error">
          <h1>404</h1>
          <h3>PAGE NOT FOUND</h3>
        </div>
        <div className="error__sitemap">
          <div className="sitemap__option">
            <img
              src="assets/logos/error-products.svg"
              alt="back to products page icon"
            />
            <h3>Products that inspire</h3>
            <p>
              From high-performance to everyday, all-day wear products—explore
              all that Beats has to offer.
            </p>
            <div
              className="sitemap__links
            "
              onClick={() => navigate("/shop")}
            >
              <span>Explore Product</span>{" "}
              <FaArrowRight className="sitemap__arrow" />
            </div>
          </div>
          <div className="sitemap__option">
            <img
              src="assets/logos/error-email.svg"
              alt="email mailing list icon"
            />
            <h3>Hear it first</h3>
            <p>
              To stay up on artists, customs & collaborations, get on the list.
            </p>
            <div
              className="sitemap__links
            "
              onClick={() => navigate("/")}
            >
              <span>Explore Product</span>{" "}
              <FaArrowRight className="sitemap__arrow" />
            </div>
          </div>
          <div className="sitemap__option">
            <img
              src="assets/logos/error-download-app.svg"
              alt="download mobile app icon"
            />
            <h3>You're in control</h3>
            <p>
              Download the Beats app for Android and Beats Pill+ app for iOS.
            </p>
            <div
              className="sitemap__links
            "
              onClick={() => navigate("/")}
            >
              <span>Explore Product</span>{" "}
              <FaArrowRight className="sitemap__arrow" />
            </div>
          </div>
          <div className="sitemap__option">
            <img
              src="assets/logos/error-register.svg"
              alt="product registration icon"
            />
            <h3>Product registration</h3>
            <p>
              Stay connected on important product updates and learn how to get
              the most out of your Beats.
            </p>
            <div
              className="sitemap__links
            "
              onClick={() => navigate("/")}
            >
              <span>Explore Product</span>{" "}
              <FaArrowRight className="sitemap__arrow" />
            </div>
          </div>
        </div>
      </main>
      <div className="error__supportPage">
        <h1>Need help with your Beats?</h1>
        <button className="btn-01" onClick={() => navigate("/support")}>
          Support
        </button>
      </div>
      <Footer scrollToNav={scrollToNav} />
    </div>
  );
};
