import React from "react";

export default function Card(props) {
    console.log(props.title);
  const isSoldOut = props.openSpots === 0;
  const isOnline = props.location === "Online";
  return (
    <div className="cardImage">
      {isOnline ? <div className="card-box"></div> : " "}
      {isSoldOut ? (
        <div className="card-spot">SOLD OUT</div>
      ) : !isSoldOut && isOnline ? (
        <div className="card-spot">ONLINE</div>
      ) : (
        " "
      )}
      <img className="main-image" src={'/images/' +props.coverImg} alt="FCC" />
      <div>
        <p>
          <img src={'/images/' +props.star} alt="rate" width="15px" />
          <span>{props.stats.rating}</span>
          <span> ({props.stats.reviewCount})</span>
          <span> -{props.location}</span>
        </p>
        <h3>{props.title}</h3>
        <p>
          <strong>From ${props.price}</strong> /person
        </p>
      </div>
    </div>
  );
}
