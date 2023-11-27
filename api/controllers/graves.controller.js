const Grave = require('../models/graves.model')
const Deceased = require('../models/deceased.model')

//CRUD

async function getAllGraves(req, res){
    try {
        const grave = await Grave.findAll({
            include: Deceased
        })
        if(grave.length !== 0){
            return res.status(200).json(grave)
        } else {
            return res.status(200).send('There are no graves')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneGrave(req, res){
    try {
        const grave = await Grave.findByPk(req.params.id)
        if(grave){
            return res.status(200).json(grave)
        } else {
            return res.status(200).send('No grave found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createGrave(req, res){
    try {
        const grave = await Grave.create(req.body)
        res.status(200).send('Grave created sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateGrave(req, res){
    try {
        const grave = await Grave.findByPk(req.params.id)
        grave.update(req.body)
        res.status(200).send('Grave updated successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteGrave(req, res){
    try {
        const grave = await Grave.findByPk(req.params.id)
        grave.destroy()
        res.status(200).send('Grave deleted sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllGraves,
    getOneGrave,
    createGrave,
    updateGrave,
    deleteGrave,
}
