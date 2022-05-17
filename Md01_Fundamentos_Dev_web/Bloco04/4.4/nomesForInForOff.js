let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

let nome = ['joao', 'maria', 'jorge'];

for (let chave in names) {
  console.log("Olá "+ names[chave]);
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let chave in car) {
  console.log(chave, car[chave]);
}

for (let chave of nome) {
  console.log(chave);
}