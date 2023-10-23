const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Common = sequelize.define(
    'common',
    {
        reference: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.ENUM('closed', 'open'),
            allowNull: false,
        }
    },
    {
        updatedAt: false,
    }
)

module.exports = Common