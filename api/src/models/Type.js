const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Type', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true
		}
		
	});
};
