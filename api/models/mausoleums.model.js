const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Mausoleum = sequelize.define(
    'mausoleum',
    {
        familia: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
    },
    {
        updatedAt: false,
    }
)

module.exports = Mausoleum