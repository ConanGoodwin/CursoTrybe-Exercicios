const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { carModel } = require('../../../src/models');

// describe('Testes de unidade do model de carros', function () {
//   it('Insere um novo carro', async function () {
//     sinon.stub(connection, 'execute').resolves(1);

//     const result = await carModel.newCar();

//     expect(result).to.be.deep.equal(drivers); 
//   });

//   afterEach(sinon.restore);
// });