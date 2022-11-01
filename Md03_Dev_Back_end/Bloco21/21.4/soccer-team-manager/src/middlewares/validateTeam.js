const teams = require("../database/teams");

const validateTeam = (req, res, next) => {
  const requiredProperties = ['nome', 'sigla'];

  if (requiredProperties.every((property) => property in req.body)) {
    next(); // Chama o próximo middleware
  } else {
    res.sendStatus(400); // Ou já responde avisando que deu errado
  }
};

const validateId = (req, res, next) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) return res.status(400).send({ message: 'id não numerico' });

  return next();
}

const existingId = (req, res, next) => {
  const idParam = Number(req.params.id);

  if (teams.some(({ id }) => id === idParam)) return next();

  return res.status(404).send({ message: 'id não encontrado' });
}

module.exports = {
  validateTeam,
  validateId,
  existingId
};