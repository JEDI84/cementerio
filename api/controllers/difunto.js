const Difunto = require('../models/difunto') //nos importamos el modelo de usuario
const Galeria = require('../models/galeria')
const Grave = require('../models/graves.model')
const Graveyard = require('../models/graveyard.model')
const Common = require('../models/common.model')
const { sequelize } = require('../../database')
const {Op} = require("sequelize")

async function getAllDifuntos(req, res) {
    try {
        const difuntos = await Difunto.findAll()
        res.status(200).json(difuntos)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneDifunto(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  //consultar lo que nos llega en la request
    try {
        const difunto = await Difunto.findByPk(req.params.id)
        if (!difunto) { res.status(500).send("difunto no encontrada") }
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}



async function createDifunto(req, res) {
    console.log(req.body)
    try {
        const difunto = await Difunto.create(req.body)
        res.status(200).send("difunto creada")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateDifunto(req, res) {
    try {
        const [difunto] = await Difunto.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteDifunto(req, res) {
    try {
        const difunto = await Difunto.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "difunto eliminado", difunto: difunto })
    } catch (error) {
        res.status(402).send(error.message)
    }
}


async function getDifuntosWithGraves(req, res) {
  console.log({ body: req.body, params: req.params, query: req.query });
  try {
    const difunto = await Difunto.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Grave,
          attributes: ['reference', 'status'],
          include: [
            {
              model: Galeria,
              attributes: ['title'],
              include: [
                {
                  model: Graveyard,
                  attributes: ['name'],
                },
              ],
            },
          ],
        },
      ],
    });

    if (!difunto) {
      return res.status(404).send("Difunto no encontrado"); // Cambiado a código de estado 404 para un recurso no encontrado.
    }

    res.status(200).json(difunto);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

async function countDifuntos(req, res) {
    try {
      const difuntosWithGraveId = await Difunto.count({
        include: [
          {
            model: Grave,
            where: { id: { [Op.not]: null } }, // Filtra los que tienen graveid no nulo
          },
        ],
      });
  
      const difuntosWithCommonId = await Difunto.count({
        include: [
          {
            model: Common,
            where: { id: { [Op.not]: null } }, // Filtra los que tienen commonid no nulo
          },
        ],
      });
  
      res.status(200).json({
        difuntosWithGraveId,
        difuntosWithCommonId,
      });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }



module.exports = { countDifuntos,getAllDifuntos, createDifunto, updateDifunto, deleteDifunto, getDifuntosWithGraves, getOneDifunto }