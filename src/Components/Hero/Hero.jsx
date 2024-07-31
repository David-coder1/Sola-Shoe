import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import product13 from "../Assets/product_13.png";
function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div className="hero_text">
          <p>new</p>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className="hero-right">
        <img src={product13} alt="" className="hero_image" />
      </div>
    </div>
  );
}

export default Hero;
