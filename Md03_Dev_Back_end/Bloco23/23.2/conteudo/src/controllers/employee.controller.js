const employeeServices = require('../services/employee.service');

const getAll = async (_req, res) => {
  try {
    const employees = await employeeServices.getAll();
    return res.status(200).json(employees);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
}

module.exports = {
  getAll
}