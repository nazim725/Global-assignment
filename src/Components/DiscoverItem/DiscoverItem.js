import React from "react";

const DiscoverItem = (props) => {
  const { title, img, description } = props.discoverItem;
  return (
    <div>
      <div className="card">
        <div className="img-body">
          <img src={img} />
        </div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DiscoverItem;
