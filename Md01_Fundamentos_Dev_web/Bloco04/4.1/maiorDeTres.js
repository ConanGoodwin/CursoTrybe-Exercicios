const num1 = 2, num2 =10, num3 = 4;

if (num1 === num2) {
    if (num1 === num3) {
        console.log("Todos os numeros são iguais.");
    }else if (num1 > num3) {
        console.log("Numero maior: ",num1);
    }else {
        console.log("Numero maior: ",num3);
    }
}else if (num1 === num3) {
    if (num1 > num2) {
        console.log("Numero maior: ",num1);
    } else {
        console.log("Numero maior: ",num2);
    }
}else if (num2 === num3) {
    if (num2 > num1) {
        console.log("Numero maior: ",num2);
    }else {
        console.log("Numero maior: ",num1);
    }
}else if (num1 > num2) {
    if (num1 > num3) {
        console.log("Numero maior: ",num1);
    }else {
        console.log("Numero maior: ",num3);
    }
}else if (num2 > num3) {
    console.log("Numero maior: ",num2);
}else {
    console.log("Numero maior: ",num3);
}