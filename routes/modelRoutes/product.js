const router = require('express').Router();

const { Product } = require('../../src/db');

router.get('/', async (req, res) => {
    const product = await Product.findAll();
    res.json(product);
});

router.post('/', async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
});

router.put('/:id', async (req, res) => {
    await Product.update(req.body, {
        where: {id: req.params.id}
    });
    res.json({ success: 'Se actualizo correctamente' });
});

module.exports = router;