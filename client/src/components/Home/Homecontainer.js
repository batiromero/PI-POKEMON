import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {clearPokemonDetail,	getPokemons, getPokemonTypes, setPokemonsOrigin } from '../../actions';
import Home from './index';
import NotFound from '../NotFound/';
import { StyledDiv } from './styled';
import { StyledBall } from './styledpokeball'
import pokebola from '../../../src/assets/img/pokebola.gif';



export const HomeContainer = ({	getPokemons, getPokemonTypes, pokemonViews,	pokemonFilter,
	setPokemonsOrigin, clearPokemonDetail,
	
}) => {
	useEffect(() => {
		getPokemons();
		getPokemonTypes();	
	}, [getPokemons, getPokemonTypes]);

	useEffect(() => {
		return () => clearPokemonDetail();
		
	}, [clearPokemonDetail]);

	const handleClick = (e) => {
		setPokemonsOrigin(e.target.value);
	};
	

		

	const [loading, setLoading] = useState(false)
	
	useEffect(() => {
		setTimeout(() => setLoading(true), 1000)
	}, [])

	if (!loading) {
		return (
		  <StyledBall>			
			<div className="div_loading">
			  <img className="imgLoading" src={pokebola} alt="sprite" />
			</div>
			<div className="div_p">
			  <p className="p">Loading...</p>
			</div>
		  </StyledBall>
		);
	  }  



	return (
		<StyledDiv>
			{pokemonViews.now.length ? (
				<div className='div_cards'>
					{pokemonViews.now.map((el) => (
						<Home
							pokemonFilter={pokemonFilter}
							handleClick={handleClick}
							key={el.id}
							id={el.id}
							name={el.name}
							hp={el.hp}
							attack={el.attack}
							defense={el.defense}
							speed={el.speed}
							height={el.height}
							weight={el.weight}
							types={el.Types}
							sprite={el.sprite}
						/>
					))}
				
				</div>
				
			) : (
				<NotFound handleClick={handleClick} />
			)}
			
		</StyledDiv>
	);
}
;

const mapStateToProps = (state) => {
	return {
		pokemons: state.pokemons,
		pokemonViews: state.pokemonViews,
		pokemonFilter: state.pokemonFilter,
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemons: () => dispatch(getPokemons()),
		getPokemonTypes: () => dispatch(getPokemonTypes()),
		setPokemonsOrigin: (origin) => dispatch(setPokemonsOrigin(origin)),
		clearPokemonDetail: () => dispatch(clearPokemonDetail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
