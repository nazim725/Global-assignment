import React from "react";
import Bannar from "../Bannar/Bannar";
import Discover from "../Discover/Discover";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div style={{ background: " #1E1B3A" }}>
      <Navigation></Navigation>
      <Bannar />
      <Discover></Discover>
      <Products></Products>
      <Footer></Footer>
    </div>
  );
};

export default Home;
