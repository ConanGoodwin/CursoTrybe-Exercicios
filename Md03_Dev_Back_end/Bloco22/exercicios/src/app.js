const express = require('express');
const connection = require('./models/connection');
const { travelModel } = require('./models');
const { passengerRoute, driverRoute } = require('./routes');

const app = express();

app.use(express.json());
app.use('/passengers', passengerRoute);
app.use('/drivers', driverRoute);

module.exports = app;
