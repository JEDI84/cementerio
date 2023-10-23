const { getAllGalerias, getOneGaleria, createGaleria, updateGaleria, deleteGaleria, } = require('../controllers/galeria')


const router = require('express').Router() 

router.get('/',getAllGalerias) 
router.get('/:id',getOneGaleria) 
router.post('/',createGaleria) 
router.put('/:id',updateGaleria) 
router.delete('/:id',deleteGaleria)  

module.exports = router

