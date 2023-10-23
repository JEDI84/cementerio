const router = require('express').Router()

const { getAllGraves, getOneGrave, createGrave, updateGrave, deleteGrave } = require('../controllers/graves.controller')

router.get('/', getAllGraves)
router.get('/:id', getOneGrave)
router.post('/', createGrave)
router.put('/:id', updateGrave)
router.delete('/:id', deleteGrave)


module.exports = router