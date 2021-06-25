const getAllPokemons = require('./getAllPokemons');

const getPokemonDetail = async (situation, element) => {
	let resultPokemon = await getAllPokemons();

	switch (situation) {
		case 'GET_NAME':
			return resultPokemon.filter((el) => el.name === element);

		case 'GET_ID':
			return resultPokemon.filter((el) => el.id.toString() === element);

		default:
			return resultPokemon;
	}
};

module.exports = getPokemonDetail;
