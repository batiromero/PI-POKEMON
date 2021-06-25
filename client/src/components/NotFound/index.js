import React from "react";
import img from "../../assets/img/run.gif";
import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";

const NotFound = ({ handleClick }) => {
  return (
    <>
      <StyledDiv>
	  <div className="div_title">
          <h2 className="title">Sorry, Pokemon not found </h2>
        </div>
		<div className="div_btn" onClick={handleClick}>
          <Link to="/home">
            <button className="eightbit-btn">Back</button>
          </Link>
        </div>
        
        <div className="div_img">
          <img className="img" src={img} alt="404" />
        </div>
      </StyledDiv>
    </>
  );
};

export default NotFound;
