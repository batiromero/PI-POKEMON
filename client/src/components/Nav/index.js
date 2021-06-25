import React from "react";
import { Link } from "react-router-dom";
import { StyledDiv } from "./styled";
import pokebola from '../../assets/img/pokebola.gif'


export const Nav = () => {
  return (
    <StyledDiv>
      <div className="div_logo">
        <Link to="/home" className="logo">
        {/*   <div>
          <img src={pokebola} className='ball'/>
          </div> */}
          <div>
          <h2>Pokedex App</h2>
          </div>
        </Link>
  
      </div>
      <div className="div_menu">
      
        <div className="div_btn">
          <Link to="/create" className="link">
          <button className='eightbit-btn'>Create Pokémon</button>  
          </Link>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Nav;
