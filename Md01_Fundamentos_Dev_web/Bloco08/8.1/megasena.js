const aposta = [2, 1, 3, 4, 5, 6].sort((a, b) => a - b); //aposta com os numeros escolhidos, distribuidos em ordem alfabética.
const qtNumeros = aposta.length; // 6 para mega-sena, define a quantidade de numeros a serem sorteados.
const rangeMaximo = 7; // 60 para a mega-sena, este numero tem de obrigatoriamente ser maior que o armazendo em qtNumeros.

// função que compara a igualdade entre jogo apostado e o sorteado
const valida = (number1, number2) =>
  number1.every((value, index) => value === number2[index]);

// função que gegra um unico numero aleatório
const numAleatorio = () => Math.floor(Math.random() * rangeMaximo + 1);

//fução resposável por todo o sorteio, de gerar um resultado, a dar uma resposta sobre o acerto ou não do mesmo
const sorteio = (apostado, funcao) => {
  //função que monta os qtNumeros sorteados
  const sorteia = (arra) => {
    if (arra.length < qtNumeros) {
      //função que gera cada numero individual sorteado, impedindo que o mesmo se repita
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

  return funcao(sorte, apostado) ? "acertou os numeros" : "Não acertou os numeros";
};

console.log(sorteio(aposta, valida));
