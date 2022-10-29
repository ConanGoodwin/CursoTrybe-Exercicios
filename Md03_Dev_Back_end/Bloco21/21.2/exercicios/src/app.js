const { json } = require('express');
const express = require('express');
const { readFile, writeFile } = require('./utils/fsUtils');

const app = express();

async function main() {
  const readingMovies = await readFile('movies.json');

  app.get('/movies/:id',(req,res) => {
    const idParams = req.params.id;
    const data = readingMovies.find(({ id }) => id === Number(idParams));

    return res.status(200).json(data);
  });

  return readingMovies;
}

main();

module.exports = app;