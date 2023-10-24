const { getAllGraveyards, getOneGraveyard, createGraveyard, updateGraveyard, deleteGraveyard, getProfile } = require("../controllers/graveyard.controller")
//const { checkAuth, checkAdmin } = require('../middleware')
const { checkAuth, checkAdmin } = require('../middleware')

const router = require('express').Router() //le indicamos que vamos a usar el router de express para que maneje las peticiones

//definimos las rutas por verbo
router.get('/',checkAuth, checkAdmin, getAllGraveyards) // trae todos los registros del modelo - todos los usuarios
router.get('/getProfile',checkAuth, checkAdmin, getProfile)
router.get('/:id',checkAuth, checkAdmin,   getOneGraveyard) //trae un solo registro - le indicamos el id por params
router.post('/',checkAuth, checkAdmin,   createGraveyard) // crea un nuevo registro en el modelo - los datos se los pasamos por el body
router.put('/:id', checkAuth, checkAdmin,  updateGraveyard) // actualiza un solo registro - le enviamos el id por params y los datos a actualizar por el body
router.delete('/:id',checkAuth, checkAdmin,  deleteGraveyard)  // elimina un recurso - le indicamos el id por params

module.exports = router