import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {clearPokemonDetail, getPokemonDetail} from '../../actions/index';
import Pokemon from './index';
import { StyledBall } from './styledpokeball';
import pokebola from '../../../src/assets/img/pokebola.gif';

export const PokemonContainer = ({match, pokemonDetail, getPokemonDetail, clearPokemonDetail}) => {

	useEffect(() => {
		getPokemonDetail(match.params.id)
		return () => clearPokemonDetail();
	}, [clearPokemonDetail, getPokemonDetail, match.params.id]);


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
		<div>
			{pokemonDetail && (
				<Pokemon
					id={pokemonDetail.id}
					name={pokemonDetail.name}
					hp={pokemonDetail.hp}
					attack={pokemonDetail.attack}
					defense={pokemonDetail.defense}
					speed={pokemonDetail.speed}
					height={pokemonDetail.height}
					weight={pokemonDetail.weight}
					types={pokemonDetail.Types}
					sprite={pokemonDetail.sprite}
					
				/>
			)}
		</div>
	);
};


const mapStateToProps = (state) => {
	return {
		pokemonDetail: state.pokemonDetail[0],
		
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		getPokemonDetail: (id) => dispatch(getPokemonDetail(id)),
		clearPokemonDetail: () => dispatch(clearPokemonDetail()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
