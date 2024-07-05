const readlineSync = require('readline-sync');

//* Solicitando as notas ao usuário
let nota1 = readlineSync.questionFloat("Digite a nota 1: ");
let nota2 = readlineSync.questionFloat("Digite a nota 2: ");
let nota3 = readlineSync.questionFloat("Digite a nota 3: ");
let nota4 = readlineSync.questionFloat("Digite a nota 4: ");

//* Calculando a média final
let mediaFinal = (nota1 + nota2 + nota3 + nota4) / 4;

//* Exibindo a média final
console.log("A média final é: " + mediaFinal.toFixed(2));
