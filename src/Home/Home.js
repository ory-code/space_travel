import React from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Header />
      <div className="container">
        <div className="text_home">
          <p className="intro_home">SO, YOU WANT TO TRAVEL TO </p>
          <h1> SPACE</h1>
          <p className="description_home">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="exp">
          <div className="explore">
          <Link to="/destination" style={{textDecoration: 'none'}}><p>EXPLORE</p></Link>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
