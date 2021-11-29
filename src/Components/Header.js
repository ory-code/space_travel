import React from "react";
import logo from "../Assets/shared/logo.svg";
import icn_nav from "../Assets/shared/icon-hamburger.svg";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  const desktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const tablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 767px)",
  });
  const mobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  return (
    <>
      {mobile && (
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <img src={icn_nav} alt="icn_nav" className="icn" />
        </div>
      )}

      {tablet && (
        <div className="header">
          <img src={logo} alt="logo" className="logo" />
          <nav className="navbar">
            <ul>
              <li className="li_num">00</li>
              <li className="li_text">HOME</li>
              <li className="li_num">01</li>
              <li className="li_text">DESTINATION</li>
              <li className="li_num">02</li>
              <li className="li_text">CREW</li>
              <li className="li_num">03</li>
              <li className="li_text">TECHNOLOGY</li>
            </ul>
          </nav>
        </div>
      )}
      {desktop && (
        <div className="header">
          <img src={logo} alt="logo" className="logo" />

          <div className="line"></div>
          <nav className="navbar">
            <ul>
              <li className="li_num">00</li>
              <li className="li_text">HOME</li>
              <li className="li_num">01</li>
              <Link style={{textDecoration: 'none'}}  to="/destination">
                <li className="li_text">DESTINATION</li>
              </Link>
              <li className="li_num">02</li>
              <li className="li_text">CREW</li>
              <li className="li_num">03</li>
              <li className="li_text">TECHNOLOGY</li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
