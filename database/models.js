const Grave = require('../api/models/graves.model')
const Mausoleum = require('../api/models/mausoleums.model')
const Common = require('../api/models/common.model')
const Graveyard = require('../api/models/graveyard.model.js')
const Galeria = require('../api/models/galeria')
const Tanatopractore = require('../api/models/tanatopractore')
const tanatopractore_difunto = require('../api/models/tanatopractore_difunto.model')
const Difunto = require('../api/models/difunto')


function addRelationsToModels() {
    try {
        Galeria.hasMany(Grave)
        Grave.belongsTo(Galeria)

        Graveyard.hasMany(Galeria)
        Galeria.belongsTo(Graveyard)

        Galeria.hasMany(Grave)
        Grave.belongsTo(Galeria)

        Grave.hasOne(Difunto)
        Difunto.belongsTo(Grave)

        Graveyard.hasMany(Mausoleum)
        Mausoleum.belongsTo(Graveyard)

        Mausoleum.hasMany(Difunto)
        Difunto.belongsTo(Mausoleum)

        Common.hasMany(Difunto)
        Difunto.belongsTo(Common)

        Tanatopractore.belongsToMany(Difunto, { through: tanatopractore_difunto})
        Difunto.belongsToMany(Tanatopractore, { through: tanatopractore_difunto})

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = { addRelationsToModels } 