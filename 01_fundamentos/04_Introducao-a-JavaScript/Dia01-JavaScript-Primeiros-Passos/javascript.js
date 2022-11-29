// Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados.
const a = 240;
const b = 6;
let adicao = a + b;
let subtracao = a - b;
let mulplicacao = a * b;
let divisao = a / b;
let modulo = a % b;
console.log("Adição:" + adicao , "Subtração:" + subtracao , "Multiplicação:" + mulplicacao , "Divisão:" + divisao , "Módulo:" + modulo);

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
if (a > b) {
    console.log("Maior número entre os dois é:", a);
} else if (a < b) {
    console.log("Maior número entre os dois é:", b);
} else {
    console.log("Os dois números são iguais.")
}

// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
const c = 480;
if (a > b && a > c) {
    console.log("Entre os três o maior número é o:", a);
} else if (b > a && b > c) {
    console.log("Entre os três o maior número é o:", b);
} else if (c > a && c > b) {
    console.log("Entre os três o maior número é o:", c);
} else {
    console.log("Os três números são iguais.")
}

// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
const valorRecebido = 10;
let checaValor = Boolean;
if (valorRecebido > 0) {
    checaValor = true;
    console.log(checaValor ,("o número é positivo."));
} else if (valorRecebido < 0) {
    checaValor = false;
    console.log(checaValor ,("o número é negativo."));
} else {
    console.log(valorRecebido);
}

// Eu me senti muito orgulhoso desse código, mas depois que fui conferir as palavras, ele pede "positive" e "negative", e eu achei que era "true" e "false"    :(
// Tentei salvar colocando o texto "o número é positivo/negativo" pra estar mais perto da resposta, mas vou deixar assim porque achei ele bem bonitinho        :D



// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
// Um ângulo será considerado inválido se não tiver um valor positivo.



// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
// Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)



// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A // >= 80 -> B // 70 -> C // 60 -> D // 50 -> E /// < 50 -> F
// O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.



// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.



// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false.
// Bonus: use somente um if.



// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);



// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.


