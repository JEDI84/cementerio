const router = require('express').Router()

const { getAllCommons, getOneCommon, createCommon, updateCommon, deleteCommon } = require('../controllers/commons.controller')

router.get('/', getAllCommons)
router.get('/:id', getOneCommon)
router.post('/', createCommon)
router.put('/:id', updateCommon)
router.delete('/:id', deleteCommon)


module.exports = router