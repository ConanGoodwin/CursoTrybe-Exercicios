const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  return arrays.map((item) => item.reduce((acc, curr) => acc + curr));
}

console.log(flatten());