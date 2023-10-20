const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Movie = sequelize.define(
	'movie',
	{
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
        year: {
			type: DataTypes.INTEGER,
        },
		director: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        duration: {
            type: DataTypes.STRING,
        },
        genre: {
            type: DataTypes.STRING,
        },
        rate: {
			type: DataTypes.INTEGER,
        },
       
    },
    {updatedAt: false,createdAt:false}
)

module.exports = Movie
 