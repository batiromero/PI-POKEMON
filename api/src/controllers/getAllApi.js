const axios = require('axios');
const {POKEMON_URL} = require('../utils/constants');

const getApi = async () => {
	let pokemonUrl = await axios.get(POKEMON_URL); //requiere primeros 20 resultados
	let pokemonUrlNext = await axios.get(pokemonUrl.data.next); //requiere los proximos 20 resultados
	let resultPokemon = pokemonUrl.data.results.concat(pokemonUrlNext.data.results);
	
	/* Para cada Pokemon accedo a sus propiedades */
	for (let el of resultPokemon) {
		let pokemonInfo = await axios.get(el.url); //Subrequest al url del pokemon que trae la API
		pokemonInfo = pokemonInfo.data;
		el.id = pokemonInfo.id;
		el.hp = pokemonInfo.stats[0].base_stat;
		el.attack = pokemonInfo.stats[1].base_stat;
		el.defense = pokemonInfo.stats[2].base_stat;
		el.speed = pokemonInfo.stats[5].base_stat;
		el.height = pokemonInfo.height;
		el.weight = pokemonInfo.weight;
		el.Types = pokemonInfo.types.map((el) => {
			return {name: el.type.name};
		});
		el.sprite = pokemonInfo.sprites.front_default;
		delete el.url;
	}
	
	return resultPokemon;
	
	
};


const getAllApi = getApi();

module.exports = getAllApi;

