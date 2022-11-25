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
    console.log('O valor é maior que 20!');
}
    else {
        console.log('O valor é menor que 20!');
    
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let maior = 0;
for (index = 0; index < numbers.length; index += 1) {
    if (maior < numbers[index]) {
        maior = numbers[index];
    }
}
console.log('Maior número é o : ' + maior);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let impares = 0;
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        impares += 1;
    }
}
if (impares > 0) {
    console.log('São ' + impares + ' números ímpares.');
} else {
    console.log('Nenhum valor ímpar encontrado.');
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
let menor = soma;
for (index = 0; index < numbers.length; index += 1) {
    if (menor > numbers[index]) {
        menor = numbers[index];
    } 
}
console.log('O menor número é o: ' + menor);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let final = [];
for (index = 1; index < 26; index += 1) {
    final.push(index)
}
console.log('A array: ' + final);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
let divisao = 0;
for (index = 0; index < final.length; index += 1) {
    divisao = final[index] / 2;
    console.log('Divisão ' + final[index] + ' / 2 = ' + divisao);
}

// Gostei bastante de fazer esse exercício, agora são 19:29, sextou! :rocket: 