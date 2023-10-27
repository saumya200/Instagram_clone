// import React from 'react'
import home from "../../Images/home.png";
import search from "../../Images/search.png";
import more from "../../Images/more.png";
import saumya from "../../Images/saumya.png";
import heart from "../../Images/heart1.png";
// import instagram_icon from "../../Images/instagram(bw).png";

// import { useContext } from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* <img src={instagram_icon} className="instagram--icon" /> */}
        <a href="/">
          <img src={home} className="footer--home" />
          <span className="text--1">
            <h2>Home</h2>
          </span>
        </a>
        <a href="/search">
          {" "}
          <img src={search} className="footer--search" />
          <span className="text--2">
            <h2>Search</h2>
          </span>
        </a>
        <a href="/notifications">
          {" "}
          <img src={heart} className="footer--heart" />
          <span className="text--3">
            <h2>Notifications</h2>
          </span>
        </a>
        <a href="/more">
          {" "}
          <img src={more} className="footer--more" />
          <span className="text--4">
            <h2>Create</h2>
          </span>
        </a>
        <a href="profile">
          {" "}
          <img src={saumya} className="footer--profile" />
          <span className="text--5">
            <h2>Profile</h2>
          </span>
        </a>
      </div>
      <div className="footer--line"></div>
    </>
  );
}

export default Footer;
