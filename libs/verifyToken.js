const jwt = require('jsonwebtoken');
const config = require('../config/configDef');

module.exports = async function verifyToken(req, res, next) {
  // Get the token from the headers
  const token = req.headers["x-access-token"];
  console.log("paso por aquie");

  // if does not exists a token
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
  next();
}


/*export async function verifyToken(req, res, next) {
  // Get the token from the headers
  const token = req.headers["x-access-token"];

  // if does not exists a token
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
  next();
}*/