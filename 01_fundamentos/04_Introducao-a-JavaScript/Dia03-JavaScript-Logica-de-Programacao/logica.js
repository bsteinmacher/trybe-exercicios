// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.
let word = 'tryber';
let drow = [];

for (index = 1; index <= word.length; index += 1) {
    let letter = (word[word.length - index]);
    drow.push(letter);
}
console.log(drow);

// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.
let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = "";
let menorPalavra = "";

for (index = 0; index < array.length; index += 1) {
    if (maiorPalavra.length < array[index].length) {
        maiorPalavra = array[index];
    } else {
        menorPalavra = array[index];
    }
}
console.log('A maior palavrá é:', maiorPalavra, 'e a menor é:', menorPalavra);

//Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.
let maiorPrimo = 55;

for (index = 2; index <= 50; index += 1) {
    let primo = true;
    for (novoIndex = 2; novoIndex < index; novoIndex += 1) {
        if (index % novoIndex === 0) {
            primo = false;
        }
    }
    if (primo === true) {
        maiorPrimo = index;
    }
}
console.log('O maior número primo entre 2 e 50 é:' , maiorPrimo);
