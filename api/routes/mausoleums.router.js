const router = require('express').Router()

const { getAllMausoleums, getOneMausoleum,createMausoleum,updateMausoleum, deleteMausoleum } = require('../controllers/mausoleums.controller')

router.get('/', getAllMausoleums)
router.get('/:id', getOneMausoleum)
router.post('/', createMausoleum)
router.put('/:id', updateMausoleum)
router.delete('/:id', deleteMausoleum)


module.exports = router