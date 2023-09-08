// import React from 'react'
import "./ExplorerPage.css";
import camera from "../../Images/camera.png";
import message from "../../Images/message.png";
import saumya from "../../Images/saumya.png";
import add from "../../Images/add.png";
import dots from "../../Images/dots.png";
import sam from "../../Images/sam.jpg";
import heart from "../../Images/heart1.png";
import comment from "../../Images/comment.png";
import share from "../../Images/message.png";
import save from "../../Images/save-instagram.png";
import greyDots from "../../Images/greyDots.png";
import women from "../../Images/women.jpg";
import home from "../../Images/home.png";
import search from "../../Images/search.png";
import more from "../../Images/more.png";

function ExplorerPage() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <img src={camera} className="navbar--camera" />
        <h1 className="navbar--text">Instagram</h1>
        <img src={message} className="navbar--message" />
      </div>
      <div className="navbar--line"></div>

      {/* Header */}
      <div className="header">
        <img src={saumya} className="header--image" />
        <img src={add} className="more--image" />
      </div>
      <div className="header--line"></div>

      {/* Posts */}

      <div className="posts">
        <img src={saumya} className="profile--posts--image" />
        <span className="profile--name">
          <h4 className="posts--username">_.saumya._</h4>
          <p className="posts--location">Hyderabad</p>
        </span>
        <img src={dots} className="posts--dots" />
        <img src={sam} className="profile--post" />
        <img src={heart} className="posts--heart" />
        <img src={comment} className="posts--comment" />
        <img src={share} className="posts--share" />
        <img src={greyDots} className="posts--grey--dots" />
        <img src={save} className="posts--save" />
        <p className="posts--count">1/3</p>
        <div className="posts--details">
          <img src={women} className="posts--women--image" />
          <p className="posts--liked">
            Liked by <b> _.sam._ </b> and <b> 3,75,173 others</b>
          </p>
          <p className="posts--caption">
            <h4> _.saumya._</h4>
            <span> Engineering days.</span>
          </p>
          <div className="explorer--line"></div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <img src={home} className="footer--home" />
        <img src={search} className="footer--search" />
        <img src={more} className="footer--more" />
        <img src={heart} className="footer--heart" />
        <img src={saumya} className="footer--profile" />
      </div>
    </>
  );
}

export default ExplorerPage;
