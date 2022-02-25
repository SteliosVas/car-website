import React from "react";
import "./Banner.css";

const Banner = () => {
  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header className="banner">
      <div className="banner-content">
        <h1 className="banner-title">Car Evolution</h1>
        <div>
          <button className="banner-button">Buy now</button>
        </div>
        <h3 className="banner-text">
          {truncate(
            `This website has been developed as a demo for
          <br /> practising reasons and only.`,
            40
          )}
        </h3>
      </div>
    </header>
  );
};

export default Banner;
