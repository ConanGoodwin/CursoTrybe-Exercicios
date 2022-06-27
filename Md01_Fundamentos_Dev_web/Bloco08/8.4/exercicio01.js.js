const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten() {
  // return arrays.map((item) => item.reduce((acc, curr) => acc + curr));
  // return [...arrays[0], ...arrays[1], ...arrays[2]];
  // return arrays.reduce((acc, curr) => {
  //   curr.forEach((item) => acc.push(item));
  //   return acc;
  // }, []);
}

console.log(flatten());