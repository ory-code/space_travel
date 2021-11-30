import React from "react";
import Header from "../Components/Header";
import data from "../data.json";
import "./Crew.css";
const Crew = () => {
  const crew = data.crew;
  return (
    <div className="crew">
      <Header />
      <div className="crew_container">
        <div className="crew_container_intro">
          <p>02</p>
          <p>MEET YOUR CREW</p>
        </div>
        <div>
          <div className="crew_container_main">
            {crew.map((crew, key) => {
              
              return (
                <div className="figure" key={key}>
                  <img className="img_crew" src={crew.images.webp} alt="planet" />
                  <div className="figure_text">
                    <div className="figure_title_crew">
                      <h1>{crew.name}</h1>
                    </div>
                    <div className="figure_description">
                      <p>{crew.role}</p>
                    </div>
                    <div className="line"></div>
                    <div className="footer_box">
                      <div className="figure_footer">
                        <p className="detail_crew">{crew.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
