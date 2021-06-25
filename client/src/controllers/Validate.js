export const Validate = (data) => {
	let errors = {};
	let reg = /^\d+$/;
	if (!data.name) {
		errors.name = 'Name is mandatory';
	}
	if (!data.hp || data.hp.search(reg) === -1) {
		errors.hp = 'HP is mandatory (number)';
	}
	if (!data.attack || data.attack.search(reg) === -1) {
		errors.attack = 'Attack is mandatory (number)';
	}
	if (!data.defense || data.defense.search(reg) === -1) {
		errors.defense = 'Defense is mandatory (number)';
	}
	if (!data.speed || data.speed.search(reg) === -1) {
		errors.speed = 'Speed is mandatory (number)';
	}
	if (!data.height || data.height.search(reg) === -1) {
		errors.height = 'Height is mandatory (number)';
	}
	if (!data.weight || data.weight.search(reg) === -1) {
		errors.weight = 'Weight is mandatory (number)';
	}
	return errors;
};

export default Validate;
