const { Router } = require("express");
const { Pokemon } = require("../db");
const { getPokemonDetail, getAllPokemons } = require("../controllers");
const { v4: uuidv4 } = require("uuid");

const router = Router();

router.get('/', async (req, res) => {
	const {name} = req.query;
	let pokeTotal = await getAllPokemons();
	if (name) {
		let pokeName = await getPokemonDetail('GET_NAME', name);
		pokeName.length	? res.status(200).send(pokeName) : res.status(404).send('Pokemon not found');
	}
	return res.status(200).send(pokeTotal);
});
 
  
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  if (id) {
    let pokemonId = await getPokemonDetail("GET_ID", id);
    pokemonId.length ? res.status(200).send(pokemonId) : res.status(404).send("Pokemon not found");
  }
});

router.post("/", async (req, res) => {
  const { name, hp, attack, defense, speed, height, weight, type, sprite } = req.body;
  try {
    const createPokemon = await Pokemon.create({
      id: uuidv4(),
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
      sprite,
    });
    await createPokemon.setTypes(type);
    res.status(200).send(createPokemon);
  } catch (error) {
    console.log(error);
  }
}); 



module.exports = router;
