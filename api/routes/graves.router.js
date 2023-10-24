const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllGraves, getOneGrave, createGrave, updateGrave, deleteGrave } = require('../controllers/graves.controller')

router.get('/',checkAuth,  getAllGraves)
router.get('/:id',checkAuth,  getOneGrave)
router.post('/',checkAuth, checkAdmin, createGrave)
router.put('/:id',checkAuth, checkAdmin, updateGrave)
router.delete('/:id',checkAuth, checkAdmin, deleteGrave)


module.exports = router