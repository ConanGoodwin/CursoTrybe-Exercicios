const arrayNomes = ['Maria', 'Conan', 'Aurora', 'Ian', 'Wilma'];

const removeNaoFamilia = (arrayNome, nome) => arrayNome.filter((nomeElemento) => nomeElemento !== nome);

const arrayFamilia = removeNaoFamilia(arrayNomes, 'Maria');

console.log(arrayFamilia);