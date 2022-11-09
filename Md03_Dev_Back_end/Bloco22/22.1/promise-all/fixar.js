const { resolve } = require('path');
const fs = require('fs').promises;

const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];

const main = async () => {
  const att = [];

  await Promise.all(array.map(async (item,index) => {
    await fs.writeFile(resolve(__dirname, `file${index + 1}.txt`),item);
  }));
  await Promise.all(array.map(async (item,index) => {
    att.push(await fs.readFile(resolve(__dirname, `file${index + 1}.txt`),'utf8'));
  }));
  fs.writeFile(resolve(__dirname, 'fileAll.txt'), att.join(' ').replace(' !','!'));
}

main();