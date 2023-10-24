const router = require('express').Router()
const { checkAuth, checkAdmin } = require('../middleware')

const { getAllMausoleums, getOneMausoleum, createMausoleum, updateMausoleum, deleteMausoleum, getMausoleumDifunto } = require('../controllers/mausoleums.controller')

router.get('/',checkAuth, getAllMausoleums)
router.get('/:id',checkAuth, getOneMausoleum)
router.get('/:id/deceased', checkAuth, getMausoleumDifunto)
router.post('/',checkAuth, checkAdmin, createMausoleum)
router.put('/:id',checkAuth, checkAdmin, updateMausoleum)
router.delete('/:id',checkAuth, checkAdmin, deleteMausoleum)


module.exports = router