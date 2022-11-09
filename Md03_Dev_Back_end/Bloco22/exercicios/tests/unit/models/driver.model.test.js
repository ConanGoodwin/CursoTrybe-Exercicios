const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const { driverModel } = require('../../../src/models');

const { drivers } = require('./mocks/driver.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Recuperando uma travel a partir do seu id', async function () {
    sinon.stub(connection, 'execute').resolves([[drivers]]);

    const result = await driverModel.findAll();

    expect(result).to.be.deep.equal(drivers);
  });

  afterEach(sinon.restore);
});