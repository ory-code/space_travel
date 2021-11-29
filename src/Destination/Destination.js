import React from "react";
import Card from "../Components/Card";
import Header from "../Components/Header";
import "./Destination.css";
const Destination = () => {
  
  return (
    <div className="destination">
      <Header />
      <div className="destination_container">
        <div className="destination_container_intro">
          <p>01</p>
          <p>PICK YOUR DESTINATION</p>
        </div>
        <Card/>
      </div>
    </div>
  );
};

export default Destination;
