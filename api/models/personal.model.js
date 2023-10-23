const { sequelize } = require('../../database/index.js') //importamos la instancia de sequilize creada en la carpeta database
const { DataTypes } = require('sequelize')

const Personal = sequelize.define('personal', { // definimos las columnas de nuestra tabla

    name: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "admin"
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
    password: {
        type: DataTypes.STRING
    },

},
    { //opciones
        updatedAt: false, // evita que nos cree las columnas updateAt y createAt
    })

module.exports = Personal