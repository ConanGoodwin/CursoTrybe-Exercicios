const express = require('express');
const teams = require('../database/teams');
const { validateId, existingId, validateTeam } = require('../middlewares/validateTeam');

const OK = 200;
// const INTERNAL_SERVER_ERROR = 500;

const route = express.Router();

let nextId = 3;

route.get('/', (_req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

route.get('/teams', (req, res) => res.status(OK).json({ teams }));

route.get('/teams/:id', validateId, existingId, (req, res) => {
  const { id } = req.params;
  const teamEsp = teams.find((team) => team.id === Number(id));

    res.status(OK).json({ teamEsp });
});

// Arranja os middlewares para chamar validateTeam primeiro
route.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };

  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

route.put('/teams/:id', validateTeam, validateId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

    const index = teams.indexOf(team);
    const updated = { id, ...req.body };

    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});


route.delete('/teams/:id', validateId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);

  teams.splice(index, 1);
  res.sendStatus(204);
});


module.exports = route;