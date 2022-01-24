const router = require('express').Router();

//configurando las rutas del modelo category

const controller = require('../../controller/category.controller');

router.post('/', controller.post);

router.get('/', controller.findAll);

module.exports = router;