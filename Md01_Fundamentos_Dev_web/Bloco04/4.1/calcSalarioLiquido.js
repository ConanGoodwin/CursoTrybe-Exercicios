let salarioBruto = 3000.00;
let INSS, aliquitaIR, parcelaIR;
let salarioBase, salarioLiquido;

console.log("Sálario Bruto:",salarioBruto);

if (salarioBruto <= 1556.94) {
    INSS = (salarioBruto * 8) /100;
}else if (salarioBruto <= 2594.92){
    INSS = (salarioBruto * 9) /100;
}else if (salarioBruto <= 5189.82){
    INSS = (salarioBruto * 11) /100;
}else {
    INSS = 570.88;
}

salarioBase = salarioBruto - INSS;
console.log("Sálario Base:",salarioBase);

if (salarioBase <= 1903.98) {
    aliquitaIR = 0;
    parcelaIR = 0;
}else if (salarioBase <= 2826.65){
    aliquitaIR = (salarioBase * 7.5) / 100;
    parcelaIR = 142.80;
}else if (salarioBase <= 3751.05){
    aliquitaIR = (salarioBase * 15) / 100;
    parcelaIR = 354.80;
}else if (salarioBase <= 4664.68){
    aliquitaIR = (salarioBase * 22.5) / 100;
    parcelaIR = 636.13; 
}else {
    aliquitaIR = (salarioBase * 27,5) / 100;
    parcelaIR = 869.36;
}

salarioLiquido = salarioBase - (aliquitaIR - parcelaIR);

console.log("Sálario Liquido:",salarioLiquido);