const Gallery = require('../models/gallery.model') 


async function getAllGalerias(req, res){
    try {
        const galerias = await Gallery.findAll()
        res.status(200).json(galerias)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneGaleria(req, res) {
    console.log({body: req.body, params: req.params, query: req.query}) 
    try {
        const galeria = await Gallery.findByPk(req.params.id)
        if (!galeria){ res.status(500).send("galeria no encontrada")}
        res.status(200).json(galeria)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createGaleria(req, res){
    console.log(req.body)
    try {
        const galeria = await Gallery.create(req.body)
        res.status(200).send("galeria creada")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateGaleria(req, res){
    try {
        const [galeria] = await Gallery.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(galeria)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteGaleria(req, res){
    try {
        const galeria = await Gallery.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: "galeria eliminado", galeria: galeria})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllGalerias, getOneGaleria, createGaleria, updateGaleria, deleteGaleria,}