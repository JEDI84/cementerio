const Grave = require('../api/models/graves.model')
const Mausoleum = require('../api/models/mausoleums.model')
const Common = require('../api/models/common.model')
const Cementerio = require('../api/models/graveyard.model.js')
const ContactInfo = require('../api/models/personal.model.js')
const galeria = require('../api/models/galeria')
const difunto = require('../api/models/difunto')
const tanatopractore = require('../api/models/tanatopractore')


function addRelationsToModels(){
    try {
        console.log('Relations added to all models')
    } catch (error) {
        throw error
    }
}

module.exports =  {addRelationsToModels} 