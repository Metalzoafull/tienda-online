//const {Category} = require('../src/db');

const categoriesModel = require('../models').category

const controller = {}

controller.post = async (req, res) => {
    const category = await categoriesModel.create(req.body);
    res.json(category);
}

controller.findAll = async (req, res) => {
    const category = await categoriesModel.findAll();
    res.json(category)
}


module.exports = controller;