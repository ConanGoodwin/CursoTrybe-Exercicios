const horaCorrente = 16.11;
let menssagem;

if (horaCorrente >= 22) {
    menssagem = "Não deveríamos comer nada, é hora de dormir";
}else if (horaCorrente >= 18) {
    menssagem = "Rango da noite, vamos jantar :D";
}else if (horaCorrente >= 14) {
    menssagem = "Vamos fazer um bolo pro café da tarde?" ;
}else if (horaCorrente >= 12) {
    menssagem = "Hora do almoço!!!";
}else if (horaCorrente >=4) {
    menssagem = "Hmmm, cheiro de café recém passado";
}

console.log(menssagem);