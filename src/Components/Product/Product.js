import React from "react";

const Product = (props) => {
  const { mission_name, launch_year } = props.product;
  const { rocket_name } = props.product.rocket;
  const { upcoming } = props.product.links;
  console.log(upcoming);
  return (
    <div className="product-card">
      <h4>{mission_name}</h4>
      <h5>Rocket name: {rocket_name}</h5>
      <h5>launch year: {launch_year}</h5>
      <h5>Upcoming: {upcoming}</h5>
    </div>
  );
};

export default Product;
