const { countDeceased, getAllDeceased, createDeceased, updateDeceased, deleteDeceased, getDeceasedWithGraves, getOneDeceased, getDeceasedByQuery, } = require('../controllers/deceased.controller')
const { checkAuth, checkAdmin } = require('../middleware')
const router = require('express').Router() 

router.get('/', checkAuth, getAllDeceased) 
router.get('/search', checkAuth, getDeceasedByQuery)
router.get('/difuntoscount', countDeceased) 
router.get('/:id',checkAuth,getOneDeceased)
router.post('/', checkAuth, checkAdmin, createDeceased) 
router.get('/',getAllDeceased) 
router.get('/difuntos-Grave-Galery-Graveyard/:id',getDeceasedWithGraves) 
router.get('/:id', getOneDeceased)

router.post('/',checkAuth, checkAdmin,createDeceased) 
router.put('/:id',checkAuth, checkAdmin,updateDeceased) 
router.delete('/:id',checkAuth, checkAdmin,deleteDeceased)  

module.exports = router

