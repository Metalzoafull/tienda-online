//const bcrypt = require('bcrypt'); 
//"bcryptjs";
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    dni: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'user',
  });

  //user.methods.encryptPassword = {};
  /*user.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.compare(10);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  };*/
  /*user.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };*/
  


  return user;


  /*
  userSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};
  */
};