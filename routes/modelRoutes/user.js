const router = require('express').Router();

//const { post } = require('../../controller/product.controller');
const controller = require('../../controller/user.controller');



router.post('/', controller.post);
router.get('/', controller.get);
router.post('/singIn', controller.singIn);

module.exports = router;