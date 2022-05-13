let percentual = 55;
let nota;

if (percentual >= 90 && percentual <= 100){
    nota = "A";
}else if (percentual >= 80){
    nota = "B";
}else if (percentual >= 70){
    nota = "C";
}else if (percentual >= 60){
    nota = "D";
}else if (percentual >= 50){
    nota = "E";
}else if (percentual >= 0 && percentual < 50){
    nota = "F";
}else {
    nota="Porcentagem invalida!";
}

console.log(nota);