const { getAllDifuntos, getOneDifunto, createDifunto, updateDifunto, deleteDifunto, } = require('../controllers/difunto')


const router = require('express').Router() 

router.get('/',getAllDifuntos) 
router.get('/:id',getOneDifunto) 
router.post('/',createDifunto) 
router.put('/:id',updateDifunto) 
router.delete('/:id',deleteDifunto)  

module.exports = router

