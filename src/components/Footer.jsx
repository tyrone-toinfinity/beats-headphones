import { FaChevronUp } from "react-icons/fa";
import "./Footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="legal-container">
      <div className="legal-body">
        <p>
          <sup>1</sup>&nbsp;Offer available 9/26/22 - 11/24/22 at Apple and U.S.
          Apple retail stores. Available online until 11:59:59 p.m. P.T.,
          11/24/22. While supplies last. Excludes taxes. Not valid with any
          other Beats offer. $199.95 for Powerbeats Pro in Black, Ivory, and
          Navy.
        </p>
        <p>
          <sup>2</sup>&nbsp;Beats Fit Pro engraving available for the following
          colors only: Beats Black, Beats White, Sage Gray, Stone Purple.
        </p>
        <p>
          <sup>3</sup>&nbsp;New subscribers only. Offer available for a limited
          time to new subscribers who connect an eligible device to an Apple
          device running iOS 15 or iPadOS 15 or later. Offer good for 3 months
          after eligible device pairing. No audio product purchase necessary for
          current owners of eligible devices. Plan automatically renews at your
          regions price per month until cancelled. Restrictions and other terms
          apply.
        </p>
        <p>
          <sup>4</sup>&nbsp;Works with compatible Beats headphones. Find My
          Beats requires an iPhone or iPod touch with iOS 14.5 or later, iPad
          with iPadOS 14.5 or later, or Mac with macOS Big Sur 11.3 or later.
          Customers must have an Apple ID and be signed into their iCloud
          account with Find My enabled.
        </p>
      </div>
      <p className="legal-copyright">
        {" "}
        Copyright © {year} Apple Inc. - All rights reserved.
      </p>
      <span
        className="topPage"
        onClick={scrollToTop}
        onDoubleClick={scrollToTop}
      >
        <FaChevronUp />
      </span>
    </div>
  );
};
