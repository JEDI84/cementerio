const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Tanatopractor = sequelize.define('tanatopractor', { 

        name: {
            type: DataTypes.STRING,
            
        },
        info: {
            type: DataTypes.STRING
        },
},
{ //opciones
    timestamps: false,
})

module.exports = Tanatopractor