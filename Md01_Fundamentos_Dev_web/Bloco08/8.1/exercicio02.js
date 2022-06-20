const sorteio = (aposta, funcao) =>
  aposta == funcao() ? "Parabéns você ganhou!" : "Tente novamente.";

console.log(sorteio(2, () => Math.floor(Math.random() * 5)));
