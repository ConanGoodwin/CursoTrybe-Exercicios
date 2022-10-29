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
  // try {
    const oldData = await readFile(arqName);
    // console.log(path.resolve(__dirname,`${FILE_PATH}/${arqName}`));
    console.log(objText);
    console.log(oldData.length);
    console.log({ "id": oldData[oldData.length -1].id + 1, "movie": objText.movie, "price": objText.price});

    fs.writeFile(path.resolve(
      __dirname,`${FILE_PATH}/${arqName}`),
       JSON.stringify([...oldData, { "id": oldData[oldData.length -1].id + 1, "movie": objText.movie, "price": objText.price}]));  
  // } catch (error) {
  //   confirm.error(error);
  // }
}

const updateFile = async (arqName, objText, id) => {
  const oldData = await readFile(arqName);
  const newData = oldData.reduce((acc,curr) => {
    if (curr.id === id) {
      return [...acc, objText];
    } else {
      return [...acc, curr];
    }
  })

  fs.writeFile(path.resolve(__dirname,`${FILE_PATH}/${arqName}`), JSON.stringify(newData));
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
