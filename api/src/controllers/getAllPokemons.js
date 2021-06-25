const getAllApi = require('./getAllApi'); 
const getAllApp = require('./getAllApp');


const getAllPokemons = async () => {
	let pokemonApi = await getAllApi;
	let pokemonApp = await getAllApp();
	let totalPokemons = pokemonApi.concat(pokemonApp);
	return totalPokemons;
};

module.exports = getAllPokemons;
