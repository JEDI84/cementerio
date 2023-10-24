const { getAllGalerias, getOneGaleria, createGaleria, updateGaleria, deleteGaleria, } = require('../controllers/gallery.controller')
const { checkAuth, checkAdmin } = require('../middleware')


const router = require('express').Router() 

router.get('/',checkAuth,getAllGalerias) 
router.get('/:id',checkAuth,getOneGaleria) 
router.post('/',checkAuth, checkAdmin,createGaleria) 
router.put('/:id',checkAuth, checkAdmin,updateGaleria) 
router.delete('/:id',checkAuth, checkAdmin,deleteGaleria)  

module.exports = router

