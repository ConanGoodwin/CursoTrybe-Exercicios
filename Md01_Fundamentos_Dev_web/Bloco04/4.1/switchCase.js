let situacao = "lista";

switch (situacao) {
  case "aprovada":
    console.log("Parabens por passar na seleção!!!");
    break;
  case "lista":
    console.log("Seu nome foi inserido em uma lsita de vagas não preenchidas!");
    break;
  case "reprovada":
    console.log("Você não passou no processo seletivo, não desanime e tente outra vez!");
    break;
  default:
    console.log("Não se aplica.");
}
