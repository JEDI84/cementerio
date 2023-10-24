const Tanatopractor = require('../models/tanatopractor.model') 

async function getAllTanatopractores(req, res){
    try {
        const tanatopractores = await Tanatopractor.findAll()
        res.status(200).json(tanatopractores)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneTanatopractore(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  
    try {
        const tanatopractore = await Tanatopractor.findByPk(req.params.id)
        if (!tanatopractore){ res.status(500).send("Tanatopractor no encontrado")}
        res.status(200).json(tanatopractore)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createTanatopractore(req, res){
    console.log(req.body)
    try {
        const tanatopractore = await Tanatopractor.create(req.body)
        res.status(200).send("Tanatopractor creado")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateTanatopractore(req, res){
    try {
        const [tanatopractore] = await Tanatopractor.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(tanatopractore)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteTanatopractore(req, res){
    try {
        const tanatopractore = await Tanatopractor.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: "Tanatopractor eliminado", tanatopractore: tanatopractore})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getAssignedDeceased(req, res) {
    try {
        const relation = await Tanatopractor.findByPk(req.params.id)
        const assigned = await relation.getDifuntos()
        return res.status(200).json(assigned)
    } catch (error) {
        res.status(500).send(error.message)
    }

}

module.exports = { getAllTanatopractores, getOneTanatopractore, createTanatopractore, updateTanatopractore, deleteTanatopractore, getAssignedDeceased,}