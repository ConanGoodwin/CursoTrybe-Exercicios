const estudantes = [
  {
    nome: "Jorge",
    sobrenome: "Silva",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: 67 },
      { name: "Português", nota: 79 },
      { name: "Química", nota: 70 },
      { name: "Biologia", nota: 65 },
    ],
  },
  {
    nome: "Mario",
    sobrenome: "Ferreira",
    idade: 15,
    turno: "Tarde",
    materias: [
      { name: "Matemática", nota: "59" },
      { name: "Português", nota: "80" },
      { name: "Química", nota: "78" },
      { name: "Biologia", nota: "92" },
    ],
  },
  {
    nome: "Jorge",
    sobrenome: "Santos",
    idade: 15,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "76" },
      { name: "Português", nota: "90" },
      { name: "Química", nota: "70" },
      { name: "Biologia", nota: "80" },
    ],
  },
  {
    nome: "Maria",
    sobrenome: "Silveira",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "91" },
      { name: "Português", nota: "85" },
      { name: "Química", nota: "92" },
      { name: "Biologia", nota: "90" },
    ],
  },
  {
    nome: "Natalia",
    sobrenome: "Castro",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "70" },
      { name: "Português", nota: "70" },
      { name: "Química", nota: "60" },
      { name: "Biologia", nota: "50" },
    ],
  },
  {
    nome: "Wilson",
    sobrenome: "Martins",
    idade: 14,
    turno: "Manhã",
    materias: [
      { name: "Matemática", nota: "80" },
      { name: "Português", nota: "82" },
      { name: "Química", nota: "79" },
      { name: "Biologia", nota: "75" },
    ],
  },
];

//Função para buscar e imprimir o nome completo de todos os estudantes que estudam no turno da manhã
// const estudantesManha = (arr, turno) =>
//   arr
//     .filter((item) => item.turno === turno)
//     .map((item) => `${item.nome} ${item.sobrenome}`);

// console.log(estudantesManha(estudantes, 'Manhã'));

//Buscar um estudante pelo nome e retornar a situação dele em cada matéria:
// const estudanteSituacao = (arr, nome) =>
//   arr
//     .map((item) => {
//       const materia = item.materias.map((item) => item.name);
//       const nota = item.materias.map((item) => item.nota);
//       const situacao = materia.map((item, index) => ({ [item]: nota[index] >=60 ? 'Aprovado' : 'Reprovado' }));
//       return {nome: item.nome, situacao: situacao};
//     })
//     .find((item) => item.nome === nome);

// console.log(estudanteSituacao(estudantes, 'Natalia'));

const estudanteSituacao = (arr, nome) => {
  const estudante = arr.find((item) => (item.nome === nome));
  const situacao = estudante.materias.map((item) => ` ${item.name}: ${item.nota >= 60 ? 'Aprovado' : 'Reprovado'}`);

  return `Estudante ${estudante.nome} situação: ${situacao}`;
};

console.log(estudanteSituacao(estudantes, "Natalia"));
