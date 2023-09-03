import React from "react";
import swimmer from "../images/swim.png";
import weddingPhoto from "../images/wedding-photography.png";
import mountainBike from "../images/mountain-bike.png";
import star from "../images/Star.png"


export default function Card(){
    return (
        <section className="card">
            <div>
                <img src={swimmer} alt="swimmer" />
                <br />
                <span><img className="starIcon" src={star} alt="star"/><small> 5.0 (6).USA</small></span>
                <p>Life lessons with katie zaferes</p>
                <p><strong>From $136</strong>/ person</p>
            </div>
            <div>
                <img src={weddingPhoto} alt="wedding" />
                <br />
                <span><img className="starIcon" src={star} alt="star"/><small> 5.0 (6).USA</small></span>
                <p>Life lessons with katie zaferes</p>
                <p><strong>From $136</strong>/ person</p>
            </div>
            <div>
                <img src={mountainBike} alt="mountain bike" />
                <br />
                <span><img className="starIcon" src={star} alt="star"/><small> 5.0 (6).USA</small></span>
                <p>Life lessons with katie zaferes</p>
                <p><strong>From $136</strong>/ person</p>
            </div>
        </section>

    )
}