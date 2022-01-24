const jwt = require('jsonwebtoken');
const config = require('../config/configDef');

//este modulo se encarga de verificar si el token es valido

module.exports = async function verifyToken(req, res, next) {
  // Get the token from the headers
  // indicamos que el token va a venir en un header
  const token = req.headers["x-access-token"];
  console.log("paso por aquie");

  // if does not exists a token
  // si no existe el token va a crear un error 401 con un mensjae
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, message: "No Token aws Provided" });
  }

  // decode the token
  const decoded = await jwt.verify(token, config.secret);

  // save the token on request object to using on routes
  req.userId = decoded.id;

  // continue with the next function
  // si el token es validado correctamente continuo con la funcion que tenia que ser llamada
  next();
}
