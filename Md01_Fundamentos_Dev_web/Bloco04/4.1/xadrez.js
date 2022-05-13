let nomePeca = "BISPO";

switch (nomePeca.toLowerCase()){
    case "peão":
        console.log("movimento um pra frente(ou dois no primeiro movimento), come em um diagonal.");
        break;
    case "torre":
        console.log("movimento em linha reta, qualquer distancia.");
        break;
    case "cavalo":
        console.log("movimento em L.");
        break;
    case "bispo":
        console.log("movimento em diagonal.");
        break;
    case "rei":
        console.log("movimento um espaço adjacente.");
        break;
    case "rainha":
        console.log("movimento de qualquer outra peça, afora o do cavalo.");
        break;
    default:
        console.log("peça inválida.");
}