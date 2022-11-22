import { Product, Footer, HeroBanner, Navbar } from "./index";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      <HeroBanner />
      <Product />
      <Footer scrollToNav={scrollToNav} />
    </div>
  );
};
