const router = require('express').Router();

//const { Product } = require('../../src/db');
const controller = require('../../controller/product.controller');

router.get('/', controller.findAll);

router.get('/:id', controller.findById)

/*router.get('/:id', async (req, res) =>{
    
    
   const product = await Product.findById({
        where: {id: req.params.id}
    });
    //const product = await Product.findAll({
    //    where: {id: req.params.id},
        //attributes: ['name']
    //});
    //res.json(product)
    //res.json(product[0].name);
    
    
})*/

router.post('/', controller.post);

router.put('/:id', controller.put);

module.exports = router;