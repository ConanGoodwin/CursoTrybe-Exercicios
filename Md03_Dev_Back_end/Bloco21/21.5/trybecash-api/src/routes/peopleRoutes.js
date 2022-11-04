// src/routes/peopleRoutes.js
const express = require('express');
const { insert } = require('../database/peopleDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const person = req.body;

  try {
    const [result] = await insert(person);

    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }

  res.status(201).json(person);
});

module.exports = router;