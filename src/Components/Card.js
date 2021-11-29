import React from "react";
import data from "../data.json";
import "./Card.css";
import "../Assets/destination/image-moon.webp";
const Card = () => {
  const planet = data.destinations;

  return (
    <div>
      <div className="destination_container_main">
        {planet.map((planet, key) => {
          console.log(planet.images);
          return (
            <div className="figure" key={key}>
              <img src={planet.images.webp} alt="planet" />
              <div className="figure_title">
                <h1>{planet.name}</h1>
              </div>
              <div className="figure_description">
                <p>{planet.description}</p>
              </div>
              <div className="line"></div>
              <div className="figure_footer">
                <p>AVG. DISTANCE </p>
                <p className="detail">{planet.distance}</p>
              </div>
              <div className="figure_footer">
                <p>EST. TRAVEL TIME</p>
                <p className="detail" >{planet.travel}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;
