const { getAllGraveyards, getOneGraveyard, createGraveyard, updateGraveyard, deleteGraveyard, getProfile } = require("../controllers/graveyard.controller")
//const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//definimos las rutas por verbo
router.get('/', getAllGraveyards) // trae todos los registros del modelo - todos los usuarios
router.get('/getProfile', getProfile)
router.get('/:id',   getOneGraveyard) //trae un solo registro - le indicamos el id por params
router.post('/',   createGraveyard) // crea un nuevo registro en el modelo - los datos se los pasamos por el body
router.put('/:id',   updateGraveyard) // actualiza un solo registro - le enviamos el id por params y los datos a actualizar por el body
router.delete('/:id',  deleteGraveyard)  // elimina un recurso - le indicamos el id por params

module.exports = router