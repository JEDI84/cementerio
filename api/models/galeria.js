const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Galeria = sequelize.define('Galeria', { 

        title: {
            type: DataTypes.STRING,
            
        },
        info: {
            type: DataTypes.STRING
        },
        
},
{ //opciones
    timestamps: false, 
})

module.exports = Galeria