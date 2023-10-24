const { countDifuntos,getAllDifuntos, createDifunto, updateDifunto, deleteDifunto, getDifuntosWithGraves, getOneDifunto } = require('../controllers/difunto')

const { checkAuth, checkAdmin } = require('../middleware')
const router = require('express').Router() 

router.get('/',getAllDifuntos) 
router.get('/difuntos-Grave-Galery-Graveyard/:id',getDifuntosWithGraves) 
router.get('/difuntoscount',countDifuntos) 
router.get('/:id',getOneDifunto)

router.post('/',checkAuth, checkAdmin,createDifunto) 
router.put('/:id',checkAuth, checkAdmin,updateDifunto) 
router.delete('/:id',checkAuth, checkAdmin,deleteDifunto)  

module.exports = router

