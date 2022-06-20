const aposta = [2, 1, 3, 4, 5, 6].sort((a, b) => a - b);
const qtNumeros = aposta.length;
const rangeMaximo = 7;

const valida = (number1, number2) =>
  number1.every((value, index) => value === number2[index]);

const numAleatorio = () => Math.floor(Math.random() * rangeMaximo + 1);

const sorteio = (apostado, funcao) => {
  const sorteia = (arra) => {
    if (arra.length < qtNumeros) {
      const geraNumero = (arrai, numero) => {
        arrai.indexOf(numero) > -1
          ? geraNumero(arrai, numAleatorio())
          : arrai.push(numero);
        return arrai;
      };
      arra = geraNumero(arra, numAleatorio()).sort((a, b) => a - b);
      sorteia(arra);
    }
    return arra;
  };

  const sorte = sorteia([]);
  console.log(`Numeros sorteados: ${sorte}`);
  console.log(`Numeros apostados: ${apostado}`);

  return funcao(sorte, apostado)
    ? "acertou os numeros"
    : "Não acertou os numeros";
};

console.log(sorteio(aposta, valida));
