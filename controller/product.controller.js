//const { Product } = require('../src/db');

const productsModel = require('../models').product

const controller = {}

controller.findAll = async (req, res) => {
    console.log("aqui no");
    const product = await productsModel.findAll();
    res.json(product);
};

controller.findById = async (req, res) => {
    const iD = req.params.id
    const product = await productsModel.findAll({
        where: {id: iD}
    });
    res.json(product[0])
};

controller.post = async (req, res) => {
    const product = await productsModel.create(req.body);
    res.json(product);
};

controller.put = async (req, res) => {
    await productsModel.update(req.body, {
        where: {id: req.params.id}
    });
    res.json({ success: 'Se actualizo correctamente' });
};

controller.delete = async (req, res) => {
    const productId = req.params.id
    const products = await productsModel.findAll({
        where: {id: productId}
    });
    
    products[0].destroy();

    res.json("eliminacion exitosa");

}

module.exports = controller;