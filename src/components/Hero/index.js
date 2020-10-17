import React from "react";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      <h1>Employee Directory</h1>
    </div>
  );
}

export default Hero;
