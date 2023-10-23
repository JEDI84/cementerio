const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Difunto = sequelize.define('Difunto', { 

        firstname: {
            type: DataTypes.STRING,
            
        },
        lastname: {
            type: DataTypes.STRING
        },
        type: {
            type: DataTypes.STRING
        },
        create_ad: {
            type: DataTypes.DATE
        },
},
{ //opciones
    timestamps: false,
})

module.exports = Difunto