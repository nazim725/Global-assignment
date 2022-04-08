import React from "react";

import "./Discover.css";
import r1 from "../../images/r1.png";
import r2 from "../../images/r2.png";
import r3 from "../../images/r3.png";
import DiscoverItem from "../DiscoverItem/DiscoverItem";

const Discover = () => {
  const discover = [
    {
      title: "Mission Bongo",
      img: r1,
      description:
        "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.",
    },
    {
      title: "Mission BD",
      img: r2,
      description:
        "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.",
    },
    {
      title: "Mission 11",
      img: r3,
      description:
        "At PIAP Space, we believe that we can make Space and Earth cleaner, engineering, and delivering top-quality robotics solutions.",
    },
  ];

  return (
    <div style={{ background: "#18163B" }} className="discover">
      <h1>Discover Univerce</h1>
      <div className="discoverItem">
        {discover.map((d) => (
          <DiscoverItem key={d.title} discoverItem={d}></DiscoverItem>
        ))}
      </div>
    </div>
  );
};

export default Discover;
