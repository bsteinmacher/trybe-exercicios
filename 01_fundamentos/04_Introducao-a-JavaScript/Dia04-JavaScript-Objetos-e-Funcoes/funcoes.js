// Que tal praticar um pouco?
// Desenvolva cada exercício a seguir utilizando funções:

// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
const a = -1;
const b = 3;
const c = 5;

function addition(num1, num2) {
    return (num1 + num2);
}
console.log('Adição de', a, 'e', b, 'é:', addition(a, b));

function subtraction(num1, num2) {
    return (num1 - num2);
}
console.log('Subtração de', a, 'e', b, 'é:', subtraction(a, b));

function multiplication(num1, num2) {
    return (num1 * num2);
}
console.log('Multiplicação de', a, 'e', b, 'é:', multiplication(a, b));

function division(num1, num2) {
    return (num1 / num2);
}
console.log('Divisão de', a, 'e', b, 'é:', division(a, b));

function modulation(num1, num2) {
    return (num1 % num2);
}
console.log('Modulação de', a, 'e', b, 'é:', modulation(a, b));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
let highestNumber = 0;

function highestValue(num1, num2) {
    if (num1 > num2) {
        return highestNumber = num1;
    } else if (num1 < num2) {
        return highestNumber = num2;
    }
}
console.log('Maior número é o:', highestValue(a, b));

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function highestValueOf3(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return highestNumberOf3 = num1;
    } else if (num2 > num1 && num2 > num3) {
        return highestNumberOf3 = num2;
    } else if (num3 > num1 && num3 > num2) {
        return highestNumberOf3 = num3;
    }
}
console.log('Maior número entre os três é:', highestValueOf3(a, b, c));

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
function verifyValue(num1) {
    if (num1 > 0) {
        return verifyNumber = 'positive';
    } else if (num1 < 0) {
        return verifyNumber = 'negative';
    } else {
        return verifyNumber = '0';
    }
}
console.log('Verificando número', subtraction(a, b) + '. Ele é:', verifyValue(subtraction(a, b))); // Fiz com o resultado da subtração de 'a' e 'b' pra testar.

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
let triangle = Boolean;

function verifyTriangle(num1, num2, num3) {
    if (verifyNegative(num1, num2, num3)) {
        console.log('Uma bela mensagem de erro pra você!');
        return;
    }
    if ((num1 + num2 + num3) == 180) {
        return triangle = true;
    }
    return triangle = false;
}

function verifyNegative(num1, num2, num3) {
    if (num1 < 0 || num2 < 0 || num3 < 0) {
        return true;
    }
}
console.log('É um triângulo?' , verifyTriangle(a, b, c));
