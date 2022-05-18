let romanos = "MMMMDCCXXVIII";
let numero = 0;

for (let index = 0; index < romanos.length; index += 1) {
  switch (romanos[index]) {
    case "I":
      if (romanos[index + 1] === "V") {
        numero += 4;
        index += 1;
      } else if (romanos[index + 1] === "X") {
        numero += 10;
        index += 1;
      } else {
        numero += 1;
      }
      break;
    case "V" :
      numero += 5;
      break;
    case "X" :
      if (romanos[index + 1] === "L") {
        numero += 40;
        index += 1;
      } else if (romanos[index + 1] === "C") {
        numero += 90;
        index += 1;
      } else {
        numero += 10;
      }
      break;
    case "L":
      numero += 50;
      break;
    case "C":
      if (romanos[index + 1] === "D") {
        numero += 400;
        index += 1;
      } else if (romanos[index + 1] === "M") {
        numero += 900;
        index += 1;
      } else {
        numero += 100;
      }
      break;
    case "D":
      numero += 500;
      break;
    case "M":
      numero += 1000;
      break;
  }
}

console.log(numero);