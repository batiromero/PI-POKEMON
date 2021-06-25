import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";



export const LandingPage = () => {
  return (
    <StyledDiv>
      
      <div className="div_nav">
        <h2 className="title">Pokedex App</h2>
      </div>
              
      <div className="div_content">
        <h3 className="h3">Get ready</h3>
        <h4 className="h3">to catch em all</h4>
        <p className="p"></p>
        <div className="div_btn">
          <Link to="/home">
            <button className="eightbit-btn">Go! </button>
          </Link>
        </div>
      </div>
    </StyledDiv>
  );
};

export default LandingPage;
