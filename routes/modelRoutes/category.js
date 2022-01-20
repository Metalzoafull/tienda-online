const router = require('express').Router();


const controller = require('../../controller/category.controller');

router.post('/', controller.post);

router.get('/', controller.findAll);

module.exports = router;