const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (nomes) => {
  return nomes.find((nome) => nome.length === 5);
}

console.log(findNameWithFiveLetters(names));