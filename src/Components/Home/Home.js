import React from "react";
import Bannar from "../Bannar/Bannar";
import Discover from "../Discover/Discover";
import Navigation from "../Navigation/Navigation";
import Products from "../Products/Products";

const Home = () => {
  return (
    <div style={{ background: " #1E1B3A" }}>
      <Navigation></Navigation>
      <Bannar />
      <Discover></Discover>
      <Products></Products>
      <h1>home</h1>
    </div>
  );
};

export default Home;
