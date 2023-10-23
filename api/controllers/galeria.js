const Galeria = require('../models/galeria') 


async function getAllGalerias(req, res){
    try {
        const galerias = await Galeria.findAll()
        res.status(200).json(galerias)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneGaleria(req, res) {
    console.log({body: req.body, params: req.params, query: req.query}) 
    try {
        const galeria = await Galeria.findByPk(req.params.id)
        if (!galeria){ res.status(500).send("galeria no encontrada")}
        res.status(200).json(galeria)
    } catch (error) {
        res.status(402).send(error.message)
    }
}



async function createGaleria(req, res){
    console.log(req.body)
    try {
        const galeria = await Galeria.create(req.body)
        res.status(200).send("galeria creada")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateGaleria(req, res){
    try {
        const [galeria] = await Galeria.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(galeria)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteGaleria(req, res){
    try {
        const galeria = await Galeria.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: "galeria eliminado", galeria: galeria})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllGalerias, getOneGaleria, createGaleria, updateGaleria, deleteGaleria,}