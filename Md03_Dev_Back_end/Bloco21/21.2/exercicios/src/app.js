const { json } = require('express');
const express = require('express');
const { readFile, writeFile } = require('./utils/fsUtils');

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
    return res.status(200).end();
  });

  return readingMovies;
}

main();

module.exports = app;
