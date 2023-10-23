const Common = require('../models/common.model')

//CRUD

async function getAllCommons(req, res) {
    try {
        const common = await Common.findAll()
        if (common.length !== 0) {
            return res.status(200).json(common)
        } else {
            return res.status(200).send('There are no commons')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneCommon(req, res) {
    try {
        const common = await Common.findByPk(req.params.id)
        if (common) {
            return res.status(200).json(common)
        } else {
            return res.status(200).send('No common found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function createCommon(req, res) {
    try {
        const common = await Common.create(req.body)
        res.status(200).send('Common created sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCommon(req, res) {
    try {
        const common = await Common.findByPk(req.params.id)
        common.update(req.body)
        res.status(200).send('Common updated successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteCommon(req, res) {
    try {
        const common = await Common.findByPk(req.params.id)
        common.destroy()
        res.status(200).send('Common deleted sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCommons,
    getOneCommon,
    createCommon,
    updateCommon,
    deleteCommon,
}