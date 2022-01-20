const { Product } = require('../src/db');

const controller = {}

controller.findAll = async (req, res) => {
    const product = await Product.findAll();
    res.json(product);
};

controller.findById = async (req, res) => {
    const iD = req.params.id
    const product = await Product.findAll({
        where: {id: iD}
    });
    res.json(product)
};

controller.post = async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
};

controller.put = async (req, res) => {
    await Product.update(req.body, {
        where: {id: req.params.id}
    });
    res.json({ success: 'Se actualizo correctamente' });
};

module.exports = controller;