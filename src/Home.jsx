import { Product, Footer, HeroBanner, ShippingBanner, Navbar } from "./index";

export const Home = ({ scrollToNav, navRef }) => {
  return (
    <div>
      <Navbar navRef={navRef} />
      {/* <ShippingBanner /> */}
      <HeroBanner />
      <Product />
      <Footer scrollToNav={scrollToNav} />
    </div>
  );
};
