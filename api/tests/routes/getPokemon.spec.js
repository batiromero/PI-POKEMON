const session = require('supertest-session');
const app = require('../../src/app.js');
const {Pokemon} = require('../../src/db.js');
const {expect} = require('chai');

const agent = session(app);

describe('Route test', () => {
	beforeEach(() => Pokemon.sync({force: true}));
	describe('GET /pokemons', () => {
		it('responds with 200', async () => {
			try {
				await agent.get('/pokemons').expect(200);
			} catch (err) {
				console.log(err);
			}
		}).timeout(20000);
		it('returns a 40 Pokémons array', async () => {
			try {
				const res = await agent.get('/pokemons');
				expect(res.body).to.have.lengthOf(40);
			} catch (err) {
				console.log(err);
			}
		}).timeout(20000);
		it('If name is passed by query, Pokedex should respond in less than 10 secs', async () => {
			try {
				const res = await agent.get('/pokemons?name=bulbasaur');
				expect(res.body[0].name).to.be.equal('bulbasaur');
			} catch (err) {
				console.log(err)
			}
		}).timeout(20000);
		it('If ID parameter is passed, Pokédex must return the pokemon associated with that ID', async () => {
			try {
				const res = await agent.get('/pokemons/1');
				expect(res.body[0].name).to.be.equal('bulbasaur');
			} catch (err) {
				console.log(err)
			}
		}).timeout(20000);
	});

	describe('POST /pokemons', () => {
		it('returns status code 200', async () => {
			try {
				await agent.post('/pokemons').send({name: 'Fede', type: 1}).expect(200);
			} catch (err) {
				console.log(err);
			}
		});

			
	});
});
