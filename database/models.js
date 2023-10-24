const Grave = require('../api/models/graves.model')
const Mausoleum = require('../api/models/mausoleums.model')
const Common = require('../api/models/common.model')
const Graveyard = require('../api/models/graveyard.model.js')
const Gallery = require('../api/models/gallery.model')
const Tanatopractor = require('../api/models/tanatopractor.model')
const tanatopractore_difunto = require('../api/models/tanatopractore_difunto.model')
const Deceased = require('../api/models/deceased.model')
const Personal = require('../api/models/personal.model')


function addRelationsToModels() {
    try {
        Gallery.hasMany(Grave)
        Grave.belongsTo(Gallery)

        Graveyard.hasMany(Gallery)
        Gallery.belongsTo(Graveyard)

        Gallery.hasMany(Grave)
        Grave.belongsTo(Gallery)

        Grave.hasOne(Deceased)
        Deceased.belongsTo(Grave)

        Graveyard.hasMany(Mausoleum)
        Mausoleum.belongsTo(Graveyard)

        Mausoleum.hasMany(Deceased)
        Deceased.belongsTo(Mausoleum)

        Common.hasMany(Deceased)
        Deceased.belongsTo(Common)

        Tanatopractor.belongsToMany(Deceased, { through: tanatopractore_difunto})
        Deceased.belongsToMany(Tanatopractor, { through: tanatopractore_difunto})

        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports = { addRelationsToModels } 