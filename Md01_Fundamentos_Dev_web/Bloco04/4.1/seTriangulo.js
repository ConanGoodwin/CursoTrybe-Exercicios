const angulo1 = 60, angulo2 = 60, angulo3 = 60;

if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0) {
    console.log("algum angulo inválido/numero negativo.");
} else if (angulo1 + angulo2 + angulo3 === 180) {
    console.log("Estes angulos formam um triângulo");
}else {
    console.log("Estes angulos NÃO formam um triângulo");
}