const router = require('express').Router();
//la funcion de apis es hacer funcional todas las rutas que reciba, por ahora solo estare llamando a la ruta product

const apiProductRouter = require('./modelRoutes/product');
const apiCategoryRouter = require('./modelRoutes/category');

router.use('/products', apiProductRouter);
router.use('/category', apiCategoryRouter);

module.exports = router; 