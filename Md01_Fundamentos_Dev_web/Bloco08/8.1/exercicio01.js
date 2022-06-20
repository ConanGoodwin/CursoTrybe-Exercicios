// const Employe = (nome) => { 
//   const employe = { nomeCompleto: nome, email: `${nome.split(' ').join('_')}@trybe.com`, };

//   return employe;  
// };

const newEmployees = (funcao) => {
  const employees = {
    id1: funcao('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: funcao('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: funcao('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees((nome) => { return { nomeCompleto: nome, email: `${nome.split(' ').join('_')}@trybe.com`, } }));