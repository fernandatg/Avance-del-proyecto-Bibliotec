import routerx from 'express-promise-router';
import libroController from '../controller/libro.controller';

//const routerx = require('express-promise-router');

import LibroController from '../controller/libro.controller';
//const PersonaController=require('../controller/persona.controller');

const router=routerx();

router.post('/crearLibro', LibroController.agregar);
router.get('/listarLibros', LibroController.consultar);
router.get('/listarLibro/:id', LibroController.consultarUno );
router.delete('/eliminarLibro/:id', LibroController.eliminar);
router.put('/actualizarLibro/:id', LibroController.Actualizar);


export default router;