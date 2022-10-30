const { json } = require('express');
const express = require('express');
const { readFile, writeFile, updateFile, deleteFile } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

async function main() {
  const readingMovies = await readFile('movies.json');

  app.get('/movies/:id',(req,res) => {
    const idParams = req.params.id;
    const data = readingMovies.find(({ id }) => id === Number(idParams));

    return res.status(200).json(data);
  });

  app.get('/movies', (_req,res) => res.status(200).json(readingMovies));

  app.post('/movies', (req,res) => {
    const newMovie = { ...req.body };
    // console.log(newMovie);

    writeFile('movies.json', newMovie);
    return res.status(201).end();
  });

  app.put('/movies/:id', (req,res) => {
    const idParams = req.params.id;
    const newMovie = { ...req.body };

    updateFile('movies.json', newMovie, idParams);
    return res.status(200).end();
  });

  app.delete('/movies/:id', (req,res) => {
    const idParams = req.params.id;

    deleteFile('movies.json', idParams);
    return res.status(200).end();
  });

  return readingMovies;
}

main();

module.exports = app;
