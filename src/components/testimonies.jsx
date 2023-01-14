import React from "react";
import "../css/testimonies.css";

export function Testimony(props) {
  return (
    <div className="container-testimony">
      <img
        className="imgage-testimony"
        src={require(`../images/testimony-${props.image}.png`)}
        alt="first person"
      />
      <div className="container-text-testimony">
        <p className="testimony-name">
          <strong>{props.name}</strong>
          in {props.country}
        </p>
        <p className="testimony-position">
          {props.position} at <strong>{props.company}</strong>
        </p>
        <p className="testimony-text">"{props.testimony}"</p>
      </div>
    </div>
  );
}
