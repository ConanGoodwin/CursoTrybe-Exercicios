const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = '../../database';

const readFile = async (arqName) => {
  const data = await fs.readFile(path.resolve(__dirname,`${FILE_PATH}/${arqName}`),'utf8');
  // const data = await fs.readFile(`${FILE_PATH}/${arqName}`,'utf8');
  console.log(data);

  return data;
};

// readFile('teste.json');

module.exports = {
  readFile
};
