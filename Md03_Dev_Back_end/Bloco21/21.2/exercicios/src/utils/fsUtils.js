const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = '../../database';

const readFile = async (arqName) => {
  let data = [];

  try {
    data = JSON.parse(await fs.readFile(path.resolve(__dirname,`${FILE_PATH}/${arqName}`),'utf8'));
  } catch (error) {
    console.log(error);
  }

  return data;
};

const writeFile = async (arqName, objText) => {
  try {
    const oldData = await readFile(arqName);
    // console.log(path.resolve(__dirname,`${FILE_PATH}/${arqName}`));

    fs.writeFile(path.resolve(__dirname,`${FILE_PATH}/${arqName}`), JSON.stringify([...oldData, objText]));  
  } catch (error) {
    confirm.error(error);
  }
}

// const newText = {
//   "id": 2,
//   "teste": "e mais um"
// }

// writeFile('teste.json',newText);

// readFile('teste.json');

module.exports = {
  readFile,
  writeFile
};
