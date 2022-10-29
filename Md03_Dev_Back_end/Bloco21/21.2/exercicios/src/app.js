const express = require('express');
const { readFile, writeFile } = require('./utils/fsUtils');

const app = express();

async function main() {
  const reading = await readFile('teste.json');
  // console.log(reading);
  const newText = {
    "id": 2,
    "teste": "e mais um"
  }

  // await writeFile('teste.json',newText);
  return reading;
}

main();

module.exports = app;