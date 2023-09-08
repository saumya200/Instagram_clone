//import React from "react";
import "./NotificationPage.css";
import panda from "../../Images/panda.jpg";
import women from "../../Images/women.jpg";
import home from "../../Images/home.png";
import more from "../../Images/more.png";
import heart from "../../Images/heart1.png";
import saumya from "../../Images/saumya.png";
import search from "../../Images/search.png";

function NotificationPage() {
  return (
    <div className="notifications">
      <h2 className="notifications--title">Notifications</h2>

      <div className="follow--requests">
        <img src={panda} className="panda--image" />
        <img src={women} className="women--image" />
        <span className="follow--requests--span--content">
          <h3 className="follow--requests--span--title">Follow requests</h3>
          <p className="follow--request--span--name">_.sruthi96._ + 1 other</p>
        </span>
      </div>
      <div className="line"></div>
      <div className="this--week">
        <h2 className="this--week--title">This week</h2>
        <img src={women} className="this--week--image" />
        <span className="this--week--image--span">
          <h3 className="this--week--image--span--name">
            _.sruthi96._
            <p className="this--week--image--span--para">
              requested to follow you.
            </p>
            <button type="button" className="confirm">
              Confirm
            </button>
            <button type="button" className="delete">
              Delete
            </button>
          </h3>
        </span>
      </div>
      <div className="footer--line"></div>
      <div className="notifications--footer">
        <img src={home} className="notifications--footer--home" />
        <img src={search} className="notifications--footer--search" />
        <img src={more} className="notifications--footer--more" />
        <img src={heart} className="notifications--footer--heart" />
        <img src={saumya} className="notifications--footer--profile" />
      </div>
    </div>
  );
}

export default NotificationPage;
