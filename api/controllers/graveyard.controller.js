const Graveyard = require('../models/graveyard.model') 


async function getAllGraveyards(req, res) {
    try {
        const graveyards = await Graveyard.findAll()
        if (graveyards.length !== 0) {
            res.status(200).json(graveyards)
        }
        else { res.status(200).send("Not graveyards found") }
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneGraveyard(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  //consultar lo que nos llega en la request
    try {
        const graveyard = await Graveyard.findByPk(req.params.id)
        if (!graveyard) { res.status(500).send("Graveyard not found") }
        res.status(200).json(graveyard)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createGraveyard(req, res) {
    console.log(req.body)
    try {
        const graveyard = await Graveyard.create(req.body)
        res.status(200).send("Graveyard created")
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateGraveyard(req, res) {
    try {
        const [graveyard] = await Graveyard.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(graveyard)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteGraveyard(req, res) {
    try {
        const graveyard = await Graveyard.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Graveyard deleted", graveyard: graveyard })
    } catch (error) {
        res.status(402).send(error.message)
    }
}


module.exports = { getAllGraveyards, getOneGraveyard, createGraveyard, updateGraveyard, deleteGraveyard, }