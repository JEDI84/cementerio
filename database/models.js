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