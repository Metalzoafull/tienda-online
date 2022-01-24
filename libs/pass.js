const bcrypt = require('bcrypt');
const res = require('express/lib/response');

//este modulo se encarga de encriptar y validad la contraseña

const encry = {};

encry.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

encry.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);

  } catch (e) {
    res.json(e);
  };
};

module.exports = encry;