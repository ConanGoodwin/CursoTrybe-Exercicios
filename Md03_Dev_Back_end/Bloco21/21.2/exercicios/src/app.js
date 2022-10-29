const express = require('express');
const { readFile } = require('./utils/fsUtils');

const app = express();

console.log(readFile('teste.json'));

module.exports = app;