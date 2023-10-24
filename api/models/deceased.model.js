const { sequelize } = require('../../database/index.js') 
const { DataTypes } = require('sequelize')

const Deceased = sequelize.define('Deceased', { 

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

module.exports = Deceased