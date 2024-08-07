import React from "react";
import "./ExplorerPage.css";
import { useState } from "react";
import camera from "../../Images/camera.png";
import message from "../../Images/message.png";
import saumya from "../../Images/saumya.png";
import add from "../../Images/add.png";
import dots from "../../Images/dots.png";
import temple from "../../Images/kalahasti.jpeg";
import heart from "../../Images/heart1.png";
import comment from "../../Images/comment.png";
// import share from "../../Images/message.png";
import save from "../../Images/save-instagram.png";
import greyDots from "../../Images/greyDots.png";
import women from "../../Images/women.jpg";
import redHeart from "../../Images/red-heart.png";
// import close from "../../Images/close.png";
import { AiOutlineClose } from "react-icons/ai";
import arrow from "../../Images/down-arrow.png";
import ape from "../../Images/ape.png";
import people1 from "../../Images/people1.jpg";
import people2 from "../../Images/people2.jpg";
import people3 from "../../Images/people3.jpg";
import people4 from "../../Images/people4.jpg";
import people5 from "../../Images/people5.jpg";
import blue_tick from "../../Images/blueTick.png";
import copyright from "../../Images/copyright.png";

// import App from "../../App";
// import App from "../../App";
// import { createContext } from "react";

const ExplorerPage = () => {
  //HEART FUNCTION//
  const [clicked, setClicked] = useState(false);
  const [likesCount, setLikesCount] = useState(0);

  const handleClick = () => {
    setClicked(!clicked);
    setLikesCount(clicked ? likesCount - 1 : likesCount + 1);
  };

  //COMMENT PAGE FUNCTION//
  const [showCommentPage, setShowCommentPage] = useState(false);

  const handleOpenCommentPage = () => {
    setShowCommentPage(true);
  };

  const handleCloseCommentPage = () => {
    setShowCommentPage(false);
  };

  const [commentValue, setCommentValue] = useState("");
  const [commentLine, setCommentLine] = useState([]);
  let commentCounter = 1;

  const addToCommentLine = () => {
    setCommentLine([
      ...commentLine,
      {
        commentId: commentCounter++,
        text: commentValue,
      },
    ]);
    setCommentValue("");
  };

  const handleCommentValue = (e) => {
    setCommentValue(e.target.value);
  };

  const enableCommentButton = () => {
    return commentValue ? false : true;
  };

  const changeCommentButtonStyle = () => {
    return commentValue
      ? "comments-button-enabled"
      : "comments-button-disabled";
  };

  const submitCommentLine = (e) => {
    e.preventDefault();
    addToCommentLine();
  };

  const enterCommentLine = (e) => {
    if (e.charCode === 13) {
      addToCommentLine();
    }
  };

  //SHARE FUNCTION//

  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        <img src={camera} className="navbar--camera" />
        <h1 className="navbar--text">Instagram</h1>
        <img src={arrow} className="explorer--down--arrow" />
        <img src={message} className="navbar--message" />
      </div>
      <div className="navbar--line"></div>

      {/*RightSideBar*/}
      <div className="rightsidebar">
        <div className="right--sidebar--header">
          <img
            src={saumya}
            className="right--sidebar--header--profile--image"
          />
          <h3 className="right--sidebar--header--username">_.saumyareddy._</h3>
          <p className="right--sidebar--header--name">Saumya Reddy</p>
          <span>
            <img src={ape} className="right--sidebar--header--name--image" />
            <img src={blue_tick} className="right--sidebar--blue--tick" />
          </span>
          <h4 className="right--sidebar--header--switch">Switch</h4>
        </div>
        <div className="right--sidebar--not--header">
          <h3 className="right--sidebar--suggested--for--you--text">
            Suggested for you
          </h3>
          <h3 className="right--sidebar--see--all-text">See all</h3>
        </div>
        <div className="right--sidebar--other--people--profiles">
          <img src={people1} className="right--sidebar--people--profile--one" />
          <span className="right--sidebar--people--profile--one--details">
            <h3>_.aionyhaust._</h3>
            <p>Followed by _.sam._</p>
            <h4>Follow</h4>
          </span>
          <img src={people2} className="right--sidebar--people--profile--two" />
          <span className="right--sidebar--people--profile--two--details">
            <h3>_.marah._</h3>
            <p>Followed by _.sam._</p>
            <h4>Follow</h4>
          </span>
          <img
            src={people3}
            className="right--sidebar--people--profile--three"
          />
          <span className="right--sidebar--people--profile--three--details">
            <h3>_.matthew._</h3>
            <p>Followed by _.sam._</p>
            <h4>Follow</h4>
          </span>
          <img
            src={people4}
            className="right--sidebar--people--profile--four"
          />
          <span className="right--sidebar--people--profile--four--details">
            <h3>_.callista._</h3>
            <p>Followed by _.sam._</p>
            <h4>Follow</h4>
          </span>
          <img
            src={people5}
            className="right--sidebar--people--profile--five"
          />
          <span className="right--sidebar--people--profile--five--details">
            <h3>_.canice._</h3>
            <p>Followed by _.sam._</p>
            <h4>Follow</h4>
          </span>
        </div>
        <div className="right--sidebar--footer">
          <p className="right--sidebar--footer--text1">
            About . Help . Press . API . Jobs . Privacy . Terms . Locations .
            Language . Meta Verified
          </p>
          <p className="right--sidebar--footer--text2">
            2023 INSTAGRAM FROM META
          </p>
          <img src={copyright} className="right--sidebar--footer--image" />
        </div>
      </div>

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
        <img src={temple} className="profile--post" />
        {clicked ? (
          <span onClick={handleClick}>
            <img src={redHeart} className="posts--red--heart" />
          </span>
        ) : (
          <span onClick={handleClick}>
            <img src={heart} className="posts--heart" />
          </span>
        )}

        {/* COMMENT */}
        <img
          src={comment}
          className="posts--comment"
          onClick={() => handleOpenCommentPage()}
        />
        <div>
          {showCommentPage && (
            <CommentPage
              handleCloseCommentPage={handleCloseCommentPage}
              changeCommentButtonStyle={changeCommentButtonStyle}
              setCommentValue={setCommentValue}
              commentLine={commentLine}
            />
          )}
        </div>

        {/* SHARE */}
        {/* <img src={share} className="posts--share" />
        <div ><SharePage/> </div> */}

        <img src={greyDots} className="posts--grey--dots" />
        <img src={save} className="posts--save" />
        <p className="posts--count">1/3</p>
        <div className="posts--details">
          <img src={women} className="posts--women--image" />
          <p className="posts--liked">
            Liked by <b> _.sam._ </b> and <b> {likesCount} others</b>
          </p>
          <p className="posts--caption">
            <h4> _.saumya._</h4>
            <span> Engineering days.</span>
          </p>
        </div>
      </div>
    </>
  );
};

const CommentPage = ({
  handleCloseCommentPage,
  handleCommentValue,
  commentValue,
  setCommentValue,
  changeCommentButtonStyle,
  enableCommentButton,
  addToCommentLine,
  submitCommentLine,
  commentLine,
}) => {
  return (
    <div className="comment--page--modal">
      <form type="form" onSubmit={submitCommentLine}>
        <h3 className="posts--comment--page--title">Comments</h3>
        <input
          type="text"
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
          placeholder="Enter your comment"
          onClick={addToCommentLine}
          className="comment--page--input--text"></input>
        <button
          type="submit"
          className="posts--comment--page--text2"
          id={changeCommentButtonStyle()}
          disabled={enableCommentButton}>
          post
        </button>
        <ul className="comments--list">
          {commentLine.map((val) => (
            <li className="each--comment" key={val.commentId}>
              {val.text}
            </li>
          ))}
        </ul>

        <div className="close--comment--page">
          <button
            type="button"
            className="posts--comment--page--close--icon"
            onClick={() => handleCloseCommentPage()}>
            <AiOutlineClose />
          </button>
        </div>
      </form>
    </div>
  );
};

const SharePage = () => {
  <div className="share--page--modal">
    <form type="form"></form>
  </div>;
};

export default ExplorerPage;
