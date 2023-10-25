const Deceased = require('../models/deceased.model') //nos importamos el modelo de usuario
const Gallery = require('../models/gallery.model')
const Grave = require('../models/graves.model')
const Graveyard = require('../models/graveyard.model')
const Common = require('../models/common.model')
const { sequelize } = require('../../database')
const {Op} = require("sequelize")

async function getAllDeceased(req, res) {
    try {
      const difuntos = await Deceased.findAll()
        return res.status(200).json(difuntos)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function getOneDeceased(req, res) {
    console.log({ body: req.body, params: req.params, query: req.query })  //consultar lo que nos llega en la request
    try {
      const difunto = await Deceased.findByPk(req.params.id)
        if (!difunto) { res.status(500).send("Difunto no encontrado") }
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function createDeceased(req, res) {
    try {
      const difunto = await Deceased.create(req.body)
        res.status(200).send("Difunto creado")

    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function updateDeceased(req, res) {
    try {
      const [difunto] = await Deceased.update(req.body, {
            where: { id: req.params.id },
        })
        res.status(200).json(difunto)
    } catch (error) {
        res.status(402).send(error.message)
    }
}

async function deleteDeceased(req, res) {
    try {
      const difunto = await Deceased.destroy({
            where: { id: req.params.id },
        })
        res.status(200).json({ text: "Difunto eliminado", difunto: difunto })
    } catch (error) {
        res.status(402).send(error.message)
    }
}


async function getDeceasedWithGraves(req, res) {
  console.log({ body: req.body, params: req.params, query: req.query });
  try {
    const difunto = await Deceased.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: Grave,
          attributes: ['reference', 'status'],
          include: [
            {
              model: Gallery,
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

async function countDeceased(req, res) {
    try {
      const difuntosWithGraveId = await Deceased.count({
        include: [
          {
            model: Grave,
            where: { id: { [Op.not]: null } }, // Filtra los que tienen graveid no nulo
          },
        ],
      });
  
      const difuntosWithCommonId = await Deceased.count({
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

  async function getDeceasedByQuery(req, res){
      try {
        const deceased = await Deceased.findAll({
              where: { [Op.and]:{lastName: { [Op.eq]: req.query.lastName },
                              firstName: { [Op.eq]: req.query.firstName }}},
          })
        deceased.length !== 0 ? res.status(200).json(deceased) : res.status(200).send('No se encontró nada')
      } catch (error) {
          res.status(500).send(error.message)
      }
  }

module.exports = { countDeceased, getAllDeceased, createDeceased, updateDeceased, deleteDeceased, getDeceasedWithGraves, getOneDeceased, getDeceasedByQuery, }