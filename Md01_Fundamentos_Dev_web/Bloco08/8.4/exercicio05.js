//Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// Adicione o código do exercício aqui:

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return (names.reduce((acc, name) => acc + name.split('').reduce((acc, curr) => curr.toLowerCase() === 'a' ? acc + curr : acc, ''), '')).length;
}

console.log(containsA());