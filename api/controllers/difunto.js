const Difunto = require('../models/difunto') //nos importamos el modelo de usuario


async function getAllDifuntos(req, res){
    try {
        const difuntos = await Difunto.findAll()
        res.status(200).json(difuntos)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneDifunto(req, res) {
    console.log({body: req.body, params: req.params, query: req.query})  //consultar lo que nos llega en la request
    try {
        const difunto = await Difunto.findByPk(req.params.id)
        if (!difunto){ res.status(500).send("difunto no encontrada")}
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}



async function createDifunto(req, res){
    console.log(req.body)
    try {
        const difunto = await Difunto.create(req.body)
        res.status(200).send("difunto creada")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateDifunto(req, res){
    try {
        const [difunto] = await Difunto.update(req.body, {
            where: {id: req.params.id},
        })
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteDifunto(req, res){
    try {
        const difunto = await Difunto.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({text: "difunto eliminado", difunto: difunto})
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllDifuntos, getOneDifunto, createDifunto, updateDifunto, deleteDifunto,}