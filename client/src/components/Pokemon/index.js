import React from "react";
import { StyledDiv } from "./styled";

const Pokemon = ({ id, name, hp, attack, defense, speed, height, weight, types, sprite
  
}) => {
  return (
    <StyledDiv>
      <div id='background'>
      <div id="cards">
        <figure className="card">
          <div className="card__image">
            <img src={sprite} alt="sprite" className="card__image" />
          </div>

          <figcaption className="card__caption">
            <h1 className="card__name">{name.toUpperCase()}</h1>

           
            <div className='div_type_container'>
						{types &&
							types.map((el, i) => (
								<div key={i} className='div_types'>
                   <h3 className="card__type">
									<p key={el.name} className='p'>
										{el.name}
									</p>
                  </h3>
								</div>
							))}
					</div>
            

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>{hp}</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>{attack}</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>{defense}</td>
                </tr>

                <tr>
                  <th>Height</th>
                  <td>{height}</td>
                </tr>
                <tr>
                  <th>Weight</th>
                  <td>{weight}</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>{speed}</td>
                </tr>
              </tbody>
            </table>
          </figcaption>
          <div className="id">ID:{id}</div>
        </figure>
        
      </div>
      </div>
    </StyledDiv>
  );
};

export default Pokemon;
