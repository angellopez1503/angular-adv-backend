/*

ruta:'api/todo/:busqueda'

*/

const { getTodo } = require('../controllers/busquedas');
const { validarJWT } = require('../middlewares/validar-jwt');
const { getDocumentosColeccion } = require('../controllers/busquedas');

const { Router } = require('express');
const router = Router();

router.get('/:busqueda', validarJWT, getTodo);
router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);




module.exports = router;

