const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Tanatopractore = sequelize.define('Tanatopractore', { 

        title: {
            type: DataTypes.STRING,
            
        },
        info: {
            type: DataTypes.STRING
        },
       
        create_ad: {
            type: DataTypes.DATE
        },
},
{ //opciones
    timestamps: false,
})

module.exports = Tanatopractore