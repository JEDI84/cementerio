const { sequelize } = require('../../database/index.js') //importamos la instancia de sequilize creada en la carpeta database
const { DataTypes } = require('sequelize')

const Galeria = sequelize.define('Galeria', { // definimos las columnas de nuestra tabla

        title: {
            type: DataTypes.STRING,
            unique: true
        },
        info: {
            type: DataTypes.STRING
        },
        
},
{ //opciones
    timestamps: false, // evita que nos cree las columnas updateAt y createAt
})

module.exports = Galeria