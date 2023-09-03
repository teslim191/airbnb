import React from "react";
import HeroImage from "../images/Group 77.png";

export default function Hero() {
  return (
    <div className="HeroImage">
      <img src={HeroImage} alt="hero" />
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
