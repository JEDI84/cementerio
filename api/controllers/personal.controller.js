const Personal = require('../models/personal.model') //nos importamos el modelo de usuario
//const ContactInfo = require('../models/contactInfo.model')

async function getAllPersonal(req, res) {
    try {
        const personal = await Personal.findAll()
        res.status(200).json(personal)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOnePersonal(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  //consultar lo que nos llega en la request
    try {
        const personal = await Personal.findByPk(req.params.id)
        if (!personal) { res.status(500).send("Personal not found") }
        res.status(200).json(personal)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getPersonal(req, res) {
    console.log(res.locals.personal)
    try {
        const personal = await Personal.findByPk(res.locals.user.id)
        if (!personal) { res.status(500).send("Personal not found") }
        res.status(200).json(personal)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createPersonal(req, res) {
    console.log(req.body)
    try {
        const personal = await Personal.create(req.body)
        res.status(200).send("Personal created")
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updatePersonal(req, res) {
    try {
        const [personal] = await Personal.update(req.body, {
            where: { id: req.params.id },
            
        })
        res.status(200).json(personal)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deletePersonal(req, res) {
    try {
        const personal = await Personal.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Personal deleted", personal: personal })
    } catch (error) {
        res.status(402).send(error.message)
    }
}

module.exports = { getAllPersonal, getOnePersonal, createPersonal, updatePersonal, deletePersonal, getPersonal }