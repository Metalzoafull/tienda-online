'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      product.belongsTo(models.category, {
        foreignKey: 'id',
        target_key: 'idCategory'
      })
    }
  }
  product.init({
    name: DataTypes.STRING,
    desciption: DataTypes.STRING,
    price: DataTypes.INTEGER, 
    idCategory: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'product',
  });
  return product; 
};