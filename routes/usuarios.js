const { Router } = require('express');
const { usuariosGet, 
        usuariosPut, 
        usuariosPatch, 
        usuariosDelete, 
        usuariosPost } = require('../controllers/usuarios');

const router = Router();



//esta pidiendo  RESTAPI
 router.get('/', usuariosGet );
//poner donde va el id se pondria lo que uno quisiera ya biene conf con express
 router.put('/:id', usuariosPut );
 
 router.post('/', usuariosPost );
  
  router.patch('/', usuariosPatch );

  router.delete('/', usuariosDelete);



module.exports = router;