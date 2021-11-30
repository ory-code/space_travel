import React from "react";
import "./Technology.css";
import data from "../data.json";
import Header from "../Components/Header";
const Technology = () => {
  const tech = data.technology;


  return (
    <div className="technology">
      <Header />
      <div className="technology_container">
        <div className="technology_container_intro">
          <p>03</p>
          <p>SPACE LAUNCH 101</p>
        </div>
      </div>
      <div className="technology_container_main">
        {tech.map((tech, key) => {
          return (
            <div className="figure" key={key}>
              <img
                className="img_tech"
                src={tech.images.landscape}
                alt="planet"
              />
              <div className="figure_text">
                <div className="figure_title_tech">
                    <p>THE THERMINOLOGY...</p>
                  <h1>{tech.name}</h1>
                </div>
                <div className="figure_description">
                  <p>{tech.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Technology;
