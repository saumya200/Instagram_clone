// import React from 'react'
import "./SearchPage.css";
import search from "../../Images/search.png";
import discoverPeople from "../../Images/discoverPeople.png";
//import panda from "../../Images/panda.jpg";
import polarBear from "../../Images/polarBear.jpg";
import home from "../../Images/home.png";
import more from "../../Images/more.png";
import heart from "../../Images/heart1.png";
import saumya from "../../Images/saumya.png";

function SearchPage() {
  return (
    <>
      <div className="search--page--header">
        <div className="search--tab">
          <img src={search} className="search--page--search--image" />
          <span className="search--page--span">
            <p className="search--page--text">Search</p>
            <img
              src={discoverPeople}
              className="search--page--discover--image"
            />
          </span>
        </div>
        <div className="search--page--images">
          {/* <img src={panda} className="panda" /> */}
          <img src={polarBear} className="polarBear" />
        </div>
        <div className="search--line"></div>

        <div className="search--page--footer">
          <img src={home} className="search--page--footer--home" />
          <img src={search} className="search--page--footer--search" />
          <img src={more} className="search--page--footer--more" />
          <img src={heart} className="search--page--footer--heart" />
          <img src={saumya} className="search--page--footer--profile" />
        </div>
      </div>
    </>
  );
}

export default SearchPage;
