//import React from 'react'
import "./ProfilePage.css";
import settings from "../../Images/settings.png";
import downArrow from "../../Images/down-arrow.png";
import person from "../../Images/discoverPeople.png";
import saumya from "../../Images/saumya.png";
import ape from "../../Images/ape.png";
import sunflower from "../../Images/sunflower.jpg";
import flower from "../../Images/flower.png";
import grid from "../../Images/grid.png";
import bookmark from "../../Images/bookmark.png";
import tag from "../../Images/instagram-tag-icon.webp";

import verified from "../../Images/verified1.png";

function ProfilePage() {
  return (
    <div className="profile--page">
      <div className="profile--page--navbar">
        <img src={settings} className="settings--image" />
        <h3 className="navbar--username">_.saumya.reddy._</h3>
        <span className="navbar--username--span">
          <img src={downArrow} className="downArrow--image" />
        </span>
        <img src={person} className="person--image" />
      </div>
      <div className="profile--page--header--line"></div>

      <div className="profile--page--header">
        <img src={saumya} className="profile--page--image" />
        <h2 className="profile--username">_.saumya.reddy</h2>
        <span className="profile--username--span">
          <img src={verified} className="blueTick--image" />
          <button type="button" className="edit--profile--button">
            Edit Profile
          </button>
          <button type="button" className="view--archive--button">
            View Archive
          </button>
        </span>
        <h4 className="name">Saumya Reddy</h4>
        <span className="name--span">
          <img src={ape} className="ape--image" />
        </span>
        <p className="bio">Professional Overthinker !</p>
        <img src={sunflower} className="sunflower--image" />
        <img src={flower} className="flower--icon" />
      </div>
      <div className="profile--page--middle--line1"></div>

      <div className="profile--middle--stats">
        <div className="profile--middle--stats--posts">
          <h3 className="post--count">0</h3>
          <p className="post--title">posts</p>
        </div>

        <div className="profile--middle--stats--followers">
          <h3 className="followers--count">20M</h3>
          <p className="followers--title">followers</p>
        </div>
        <div className="profile--middle--stats--following">
          <h3 className="following--count">0</h3>
          <p className="following--title">following</p>
        </div>
      </div>

      <div className="posts--details--no--photos">
        <h1 className="posts--title">Share Photos</h1>
        <p className="posts----details--para1">
          When you share photos, they will appear on your profile.
        </p>
        <p className="posts--details--para2">Share your first photo.</p>
      </div>

      <div className="profile--page--middle--line2"></div>
      <div className="profile--page--icons">
        <img src={grid} className="grid--image" />
        <img src={bookmark} className="bookmark--image" />
        <img src={tag} className="tag--image" />
      </div>

      <div className="profile--page--footer--line"></div>
    </div>
  );
}

export default ProfilePage;
