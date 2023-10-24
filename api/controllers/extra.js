const Galeria = require('../models/galeria') 
const Difunto = require('../models/difunto') 
const Graveyard = require('../models/graveyard.model') 

async function getDifuntosWithGraveyards(req, res) {
  try {
    const difuntos = await Difunto.findAll({
      include: [
        {
          model: Graveyard,
          attributes: ['info', 'status', 'expiration_date'] // Lista de campos que deseas incluir
        },
        { model: Galeria }
      ]
    });
    res.status(200).json(difuntos);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
module.exports = {getDifuntosWithGraveyards}