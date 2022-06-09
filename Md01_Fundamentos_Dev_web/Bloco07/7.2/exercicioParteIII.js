const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

//Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
function addTurno(objeto,chave,valor) {
  objeto[chave] = valor;
}

console.log(lesson2);
addTurno(lesson2,'turno','noite');
console.log(lesson2);

//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
function listaChaves(objeto) {
  console.log(Object.keys(objeto));
}

listaChaves(lesson1);

//Crie uma função para mostrar o tamanho de um objeto.
function mostraTamanho(objeto) {
  console.log(Object.keys(objeto).length);
}

mostraTamanho(lesson3);

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro
function listaValoress(objeto) {
  console.log(Object.values(objeto));
}

listaValoress(lesson2);
