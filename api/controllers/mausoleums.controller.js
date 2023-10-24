const Mausoleum = require('../models/mausoleums.model')

//CRUD

async function getAllMausoleums(req, res) {
    try {
        const mausoleum = await Mausoleum.findAll()
        if (mausoleum.length !== 0) {
            return res.status(200).json(mausoleum)
        } else {
            return res.status(200).send('There are no mausoleums')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

async function getOneMausoleum(req, res) {
    try {
        const mausoleum = await Mausoleum.findByPk(req.params.id)
        if (mausoleum) {
            return res.status(200).json(mausoleum)
        } else {
            return res.status(200).send('No mausoleum found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}


async function getMausoleumDifunto(req, res) {
    try {
        const mausoleum = await Mausoleum.findByPk(req.params.id)
        
            const deceased = await mausoleum.getDifuntos()
        
        if (mausoleum) {
            return res.status(200).json(deceased)
        } else {
            return res.status(200).send('No deceased found in this mausoleum')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createMausoleum(req, res) {
    try {
        const mausoleum = await Mausoleum.create(req.body)
        res.status(200).send('Mausoleum created sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateMausoleum(req, res) {
    try {
        const mausoleum = await Mausoleum.findByPk(req.params.id)
        mausoleum.update(req.body)
        res.status(200).send('Mausoleum updated successfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteMausoleum(req, res) {
    try {
        const mausoleum = await Mausoleum.findByPk(req.params.id)
        mausoleum.destroy()
        res.status(200).send('Mausoleum deleted sucessfully')
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = {
    getAllMausoleums,
    getOneMausoleum,
    createMausoleum,
    updateMausoleum,
    deleteMausoleum,
    getMausoleumDifunto
}