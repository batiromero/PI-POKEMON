const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Pokemon',
		{
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true,
				allowNull: false,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				
			},
			hp: {
				type: DataTypes.INTEGER,
			},
			attack: {
				type: DataTypes.INTEGER,
			},
			defense: {
				type: DataTypes.INTEGER,
			},
			speed: {
				type: DataTypes.INTEGER,
			},
			height: {
				type: DataTypes.INTEGER,
			},
			weight: {
				type: DataTypes.INTEGER,
			},
			sprite: {
				type: DataTypes.STRING,
			},
		},
		{timestamps: false}
	);
};
