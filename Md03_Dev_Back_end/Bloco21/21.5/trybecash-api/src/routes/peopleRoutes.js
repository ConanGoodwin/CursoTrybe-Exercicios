// src/routes/peopleRoutes.js
const express = require('express');
const peopleDB = require('../database/peopleDB');

const router = express.Router();

router.get('/', async (_req,res) => {
  try {
    const [result] = await peopleDB.select();
  
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar pessoas' });
  }
});


router.get('/:id', async (req,res) => {
  try {
    const [result] = await peopleDB.selectOne(Number(req.params.id));
  
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao buscar pessoas' });
  }
});

router.post('/', async (req, res) => {
  const person = req.body;

  try {
    const [result] = await peopleDB.insert(person);

    res.status(201).json({
      message: `Pessoa cadastrada com sucesso com o id ${result.insertId}` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ocorreu um erro ao cadastrar uma pessoa' });
  }

  res.status(201).json(person);
});

module.exports = router;