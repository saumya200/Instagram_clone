// import React from 'react'
import home from "../../Images/home.png";
import search from "../../Images/search.png";
import more from "../../Images/more.png";
import saumya from "../../Images/saumya.png";
import heart from "../../Images/heart1.png";
// import instagram_icon from "../../Images/instagram(bw).png";

// import { useContext } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        {/* <img src={instagram_icon} className="instagram--icon" /> */}
        <Link to=".." relative="path">
          <img src={home} className="footer--home" />
          <span className="text--1">
            <h2>Home</h2>
          </span>
        </Link>
        <Link to="/search">
          {" "}
          <img src={search} className="footer--search" />
          <span className="text--2">
            <h2>Search</h2>
          </span>
        </Link>
        <Link to="notifications">
          {" "}
          <img src={heart} className="footer--heart" />
          <span className="text--3">
            <h2>Notifications</h2>
          </span>
        </Link>
        <Link to="/more">
          {" "}
          <img src={more} className="footer--more" />
          <span className="text--4">
            <h2>Create</h2>
          </span>
        </Link>
        <Link to="profile">
          {" "}
          <img src={saumya} className="footer--profile" />
          <span className="text--5">
            <h2>Profile</h2>
          </span>
        </Link>
      </div>
      <div className="footer--line"></div>
    </>
  );
}

export default Footer;
