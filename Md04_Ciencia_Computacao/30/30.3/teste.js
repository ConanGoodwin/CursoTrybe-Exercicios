function merc(num) {
  const result = [];
  for (let fd = num; fd > 0; fd -= 1) {
    for (let sd = num; sd > 0; sd -= 1) {
      for (let td = num; td > 0; td -= 1) {
        for (let xd = num; xd > 0; xd -= 1) {
          if (fd + sd + td + xd === 21) result.push(`${fd}${sd}${td}${xd}`);
        }
      }
    }
  }

  return result;
}

console.log(merc(6));

// # 4 digitos que somam 21

function merc2(num) {
  const result = [];
  for (let i = 1000; i < num * 1111; i += 1) {
    const arrayI = i.toString().split("");
    if (arrayI.every((item) => item <= num)) {
      const final = arrayI.reduce((acc, curr) => (acc += parseInt(curr)), 0);
      if (final === 21) {
        result.push(i);
        console.log(i);
      }
    }
  }

  return result;
}

console.log(merc2(6));

// #quadrado perfeito

// num1 = Math.sqrt(16);
// num2 = Math.sqrt(17);
// console.log(Number.isInteger(num1));
// console.log(Number.isInteger(num2));

function maria(num1, num2) {
  let qt_quadrados_perfeitos = 0;

  for (let i = num1; i <= num2; i += 1) {
    if (Number.isInteger(Math.sqrt(i))) qt_quadrados_perfeitos += 1;
  }

  return qt_quadrados_perfeitos;
}

console.log("Qt de quadrados perfeitos: " + maria(3, 16));

// #pedras preciosas

function pedras_preciosas(qt, elementos) {
  let witchElement = [];

  for (let i = 0; i < qt - 1; i += 1) {
    pedra_atual = elementos[i].split("");
    proxima_pedra = elementos[i + 1].split("");

    witchElement = pedra_atual.filter((el) => proxima_pedra.includes(el));
    witchElement = [...new Set(witchElement)];
  }

  return witchElement.length;
}

console.log(
  "Qt elementos: " + pedras_preciosas(3, ["abcdde", "baccde", "eeabg"])
);

// console.log("oi");

// # comprimento do prefixo / semelhança de strings
const string = "ababaa".split("");
const prefixos = [];
const semelhancas = [];

for (let i = 0; i < string.length; i += 1) {
  const novo_prefixo = string.slice(i, string.length);
  prefixos.push(novo_prefixo);
}

for (let j = 0; j < prefixos.length; j += 1) {
  let cont = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === prefixos[j][i]) {
      cont += 1;
    } else {
      break;
    }
  }
  console.log(cont);
  semelhancas.push(cont);
}

const total = semelhancas.reduce((acc, curr) => (acc += parseInt(curr)), 0);
console.log(total);
// fim dis testes
