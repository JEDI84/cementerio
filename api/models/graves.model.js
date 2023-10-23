const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Grave = sequelize.define(
    'grave',
    {
        reference: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.ENUM('occupied', 'free'),
            allowNull: false,
        },
        expiration_date: {
            type: DataTypes.DATEONLY,
        }
    },
    {
        createdAt: false,
    }
)

module.exports = Grave