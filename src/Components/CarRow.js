import React from "react";
import "./CarRow.css";
import { TiArrowForward } from "react-icons/ti";
import { GrMoney } from "react-icons/gr";
import { IoCarSportSharp } from "react-icons/io5";

const CarRow = () => {
  return (
    <div className="carrow-container">
      <div className="carrow-header">
        <h2 className="header">Best Cars of the Market</h2>
        <p className="carrow-text">
          Hello, we are Car Evolution, your new premium car delivery. We know
          you are always busy. No time for looking to cars? So let us take care
          of that, we're really good at it, we promise!
        </p>
      </div>
      <div className="grid">
        <div className="grid-of-three">
          <i className="icons">
            <TiArrowForward />
          </i>
          <h3 className="head">Fast delivery</h3>
          <p className="par-text">
            We provide a fast and effective way to trasnport your brand new
            automobile at your place. Usually between 7 - 10 days.
          </p>
        </div>
        <div className="grid-of-three">
          <i className="icons">
            <GrMoney />
          </i>
          <h3 className="head">Low cost</h3>
          <p className="par-text">
            Not only we provide the best prices on the market but there is no
            extra transportation charge as well.
          </p>
        </div>
        <div className="grid-of-three">
          <i className="icons">
            <IoCarSportSharp />
          </i>
          <h3 className="head">Limited Edition</h3>
          <p className="par-text">
            The best part of all is that we can provide you with rare and
            limited edition cars. Here you can find your course your dream car.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarRow;
