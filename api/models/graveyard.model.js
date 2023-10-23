const { sequelize } = require('../../database/index.js') //importamos la instancia de sequilize creada en la carpeta database
const { DataTypes } = require('sequelize')

const Graveyard = sequelize.define('graveyard', { // definimos las columnas de nuestra tabla

    name: {
        type: DataTypes.STRING,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    address: {
        type: DataTypes.STRING,
        unique: true
    },
},
    { //opciones
        timestamps: false, // evita que nos cree las columnas updateAt y createAt
    })

module.exports = Graveyard