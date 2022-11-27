const typeError = require("../utils/mapErrors");

const errorFunc = ( error, _req, res, _next ) => {
  const { type, message } = error;

  return res.status(typeError(type)).json(message);
}

module.exports = errorFunc;