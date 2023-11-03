import React from "react";
import saumya from "../../Images/saumya.png";
import ape from "../../Images/ape.png";
import "../RightSidebar.css";

function RightSidebar() {
  return (
    <div className="right--sidebar">
      <div className="right--sidebar--header">
        <img src={saumya} className="right--sidebar--header--profile--image" />
        <h3 className="right--sidebar--header--username">_.saumyareddy._</h3>
        <h3 className="right--sidebar--header--name">Saumya Reddy</h3>
        <span>
          <img src={ape} className="right--sidebar--header--name--image" />
        </span>
      </div>
    </div>
  );
}

export default RightSidebar;
