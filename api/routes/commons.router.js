const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllCommons, getOneCommon, createCommon, updateCommon, deleteCommon } = require('../controllers/commons.controller')

router.get('/',checkAuth, getAllCommons)
router.get('/:id',checkAuth, getOneCommon)
router.post('/',checkAuth, checkAdmin, createCommon)
router.put('/:id',checkAuth, checkAdmin, updateCommon)
router.delete('/:id',checkAuth, checkAdmin, deleteCommon)


module.exports = router