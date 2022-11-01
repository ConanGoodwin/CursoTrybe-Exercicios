// src/app.js
const OK = 200;
// const INTERNAL_SERVER_ERROR = 500;
// const NOT_FOUND = 404;
const express = require('express');
const teams = require('./database/teams');
const { validateId, existingId, validateTeam } = require('./middlewares/validateTeam');

const app = express();

app.use(express.json());

let nextId = 3;

app.get('/', (_req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', validateId, existingId, (req, res) => {
  const { id } = req.params;
  const teamEsp = teams.find((team) => team.id === Number(id));

    res.status(200).json({ teamEsp });
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
  const team = { id: nextId, ...req.body };

  teams.push(team);
  nextId += 1;
  res.status(201).json(team);
});

app.put('/teams/:id', validateTeam, validateId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

    const index = teams.indexOf(team);
    const updated = { id, ...req.body };

    teams.splice(index, 1, updated);
    res.status(201).json(updated);
});


app.delete('/teams/:id', validateId, existingId, (req, res) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);
  const index = teams.indexOf(team);

  teams.splice(index, 1);
  res.sendStatus(204);
});


// GET / HTTP/1.1
// Host: developer.mozilla.org
// Accept: text/html

module.exports = app;