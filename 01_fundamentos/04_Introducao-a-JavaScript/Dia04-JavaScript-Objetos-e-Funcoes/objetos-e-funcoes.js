// Crie uma variável player e atribua um objeto contendo as variáveis listadas abaixo:
// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };

let person = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
        bronze: 0
    }
}

// Acesse as chaves name, lastName e age, usando a sintaxe meuObjeto.chave, e concatene as suas informações para imprimir no console uma mensagem no seguinte formato: “A jogadora Marta Silva tem 34 anos de idade”.
console.log('A jogadora' , person.name , person.lastName , 'tem' , person.age , 'anos de idade.');

// Adicione ao objeto a chave bestInTheWorld, usando a sintaxe meuObjeto.chave = valor, e atribua a essa chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.
person.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.log(person.bestInTheWorld);


// Acesse a chave bestInTheWorld, usando a sintaxe meuObjeto['chave'], e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
console.log('A jogadora' , person.name , person.lastName , 'foi eleita a melhor do mundo por' , person['bestInTheWorld'].length , 'vezes.');

// Acesse a chave medals, usando a sintaxe meuObjeto.chave, e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
console.log('A jogadora' , person.name , person.lastName , 'possui' , person.medals.golden , 'medalhas de ouro e' , person.medals.silver , 'medalhas de prata.');
