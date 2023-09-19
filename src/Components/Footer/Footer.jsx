// import React from 'react'
import home from "../../Images/home.png";
import search from "../../Images/search.png";
import more from "../../Images/more.png";
import saumya from "../../Images/saumya.png";
import heart from "../../Images/heart1.png";

// import { useContext } from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <a href="/">
          <img src={home} className="footer--home" />
        </a>
        <a href="/search">
          {" "}
          <img src={search} className="footer--search" />
        </a>
        <a href="/notifications">
          {" "}
          <img src={heart} className="footer--heart" />
        </a>
        <a href="/more">
          {" "}
          <img src={more} className="footer--more" />
        </a>
        <a href="profile">
          {" "}
          <img src={saumya} className="footer--profile" />
        </a>
      </div>
      <div className="footer--line"></div>
    </>
  );
}

export default Footer;
