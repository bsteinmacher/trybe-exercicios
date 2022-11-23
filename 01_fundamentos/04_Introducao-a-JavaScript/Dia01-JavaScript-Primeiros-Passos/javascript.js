const a = 240;
const b = 6;
let adicao = a + b;
let subtracao = a - b;
let mulplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
console.log("Adição:" + adicao , "Subtração:" + subtracao , "Multiplicação:" + mulplicacao , "Divisão:" + divisao , "Módulo:" + modulo);

if (a > b) {
    console.log("Número maior é o:" , a);
} else if (a < b) {
    console.log("Número maior é o:" , b);
} else {
    console.log("Números são iguais.")
}

