const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Deceased = sequelize.define('deceased', { 

        firstname: {
            type: DataTypes.STRING,           
        },
        lastname: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
},
{ //opciones
    timestamps: false,
})

module.exports = Deceased