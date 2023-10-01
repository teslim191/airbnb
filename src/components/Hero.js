import React from "react";

export const Hero = (props) => {
  return (
    <div className="hero-section">
      <img className="profile" src={props.image} alt="swimmer" />
      <div>
        <img className="rate" src={props.ratingImage} alt="star" />
        <span>({props.viewCount})</span>
        <span className="country">{props.country}</span>
        <h4>{props.title}</h4>
        <p><span className="price">From ${props.price}</span>/person</p>
      </div>
    </div>
  );
};
