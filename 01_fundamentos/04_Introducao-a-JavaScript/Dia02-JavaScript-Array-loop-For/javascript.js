let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (index = 0; index < numbers.length; index += 1) {
    console.log("Todos os valores: " + numbers[index]);
}

// Some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
    soma = soma + (numbers[index]);
}
console.log("O valor total é: " + soma);

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
let media = soma / numbers.length;
console.log('Média aritimética é: ' + media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
    console.log('Valor maior que 20!');
}
    else {
        console.log('Valor é menor que 20!');
    
}

