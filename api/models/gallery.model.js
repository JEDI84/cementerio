const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Gallery = sequelize.define('galleries', { 

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

module.exports = Gallery