import React from "react";
import "./Offers.css";
import excluscive_image from "../Assets/product_18.png";

function Offers() {
  return (
    <div className="offers">
      <div className="offers-left">
          <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>CHECK HOW</button>
      </div>
      <div className="offers-right">
        <img src={excluscive_image} alt="" className="excluscive_image"></img>
      </div>
    </div>
  );
}

export default Offers;
