/*const Sequelize = require('sequelize');

const ProductModel = require('../models/product');
const CategoryModel = require('../models/category')


const sequelize = new Sequelize('tiendaDB', 'root', '1234',{
    host:'localhost',
    dialect:'mysql'
})

const Product = ProductModel(sequelize, Sequelize);
const Category = CategoryModel(sequelize, Sequelize);

sequelize.sync({force: false})
.then(() => {
    console.log('tablas sincronizadas')
})

module.exports = {
    Category,
    Product
}*/
