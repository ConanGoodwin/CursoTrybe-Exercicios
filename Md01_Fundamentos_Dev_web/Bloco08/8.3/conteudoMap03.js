const products = ['Arroz', 'Feijão', 'Alface', 'Tomate'];
const prices = [2.99, 3.99, 1.5, 2];

const tabelaPrecos = products.map((produto, index) => ({ [produto]: prices[index ]}));

console.log(tabelaPrecos);