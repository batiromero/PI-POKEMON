import React from "react";
import { NavLink } from "react-router-dom";

export const Home = ({ id, name, types, sprite, pokemonFilter, handleClick }) => {
  return (
    <div>
      {pokemonFilter === "Search" ? (
        <div className= 'onSearch'>
          <div className="div_title"></div>
          <div className="div_btn" onClick={handleClick}>
            <NavLink to="/home">
              <button className="eightbit-btn">Back</button>
            </NavLink>
          </div>
        </div>
      ) : null}
      <NavLink to={`/pokemon/${id}`} className="link">
        <div className="div_card">
          <img className="img" src={sprite} alt="Sprite" />
          <div className="div_name">{name}</div>
          <div className="div_type_container">
            {types &&
              types.map((el, i) => (
                <div key={i} className="div_types">
                  <p key={i} className="p">
                    {el.name}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Home;
