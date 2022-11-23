import { Footer, HeroBanner, Navbar } from "./index";
import "./Support.css";

export const Support = ({ navRef, scrollToNav }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      <main className="supportContainer">
        {" "}
        <h1 className="supportHeader">beats support</h1>
      </main>

      <Footer scrollToNav={scrollToNav} />
    </div>
  );
};
