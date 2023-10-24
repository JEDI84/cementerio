const { getAllDifuntos, getOneDifunto, createDifunto, updateDifunto, deleteDifunto, } = require('../controllers/difunto')

const { checkAuth, checkAdmin } = require('../middleware')
const router = require('express').Router() 

router.get('/',checkAuth,getAllDifuntos) 
router.get('/:id',checkAuth,getOneDifunto) 
router.post('/',checkAuth, checkAdmin,createDifunto) 
router.put('/:id',checkAuth, checkAdmin,updateDifunto) 
router.delete('/:id',checkAuth, checkAdmin,deleteDifunto)  

module.exports = router

