const Tanatopractore = require('../models/tanatopractore') 


async function getAllTanatopractores(req, res){
    try {
        const tanatopractores = await Tanatopractore.findAll()
        res.status(200).json(tanatopractores)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneTanatopractore(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const tanatopractore = await Tanatopractore.findByPk(req.params.id)
        if (!tanatopractore){ res.status(500).send("tanatopractore no encontrada")}
        res.status(200).json(tanatopractore)
    } catch (error) {
        res.status(402).send(error.message)
    }
}



async function createTanatopractore(req, res){
    console.log(req.body)
    try {
        const tanatopractore = await Tanatopractore.create(req.body)
        res.status(200).send("tanatopractore creada")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateTanatopractore(req, res){
    try {
        const [tanatopractore] = await Tanatopractore.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(tanatopractore)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteTanatopractore(req, res){
    try {
        const tanatopractore = await Galeria.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: "tanatopractore eliminado", tanatopractore: tanatopractore})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllTanatopractores, getOneTanatopractore, createTanatopractore, updateTanatopractore, deleteTanatopractore,}