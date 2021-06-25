import React from "react";
import { StyledDiv } from "./styled";
import file from "../../assets/pokemon.mp3";

export const Search = ({ handleSubmit, handleChange }) => {
  return (
    <StyledDiv>
      <div className='audio'>
				<audio controls src={file} type="mpeg" id='player'/>
			</div>
      <div className="div_menu">
        <div className='search'>
        <div className="div_title">
          <h2 className="title">Find a Pokémon</h2>
          </div>

        <form onSubmit={(e) => handleSubmit(e)} className='form'>
          <div className="center">
          <input
            className="input"
            placeholder='Type a Pokémon...'
            type="text"
            autoComplete="off"
            onChange={(e) => handleChange(e)}
          />
          
          <div className="div_btn">
            <button className="btn_search" type="submit">
              Go!
            </button>
          </div>
          </div>
        </form>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Search;
