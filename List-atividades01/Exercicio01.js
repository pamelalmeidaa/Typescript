const readlineSync = require('readline-sync');

//* Definindo o salário e o abono
let salario = 10000.00;
let abono = 1000.00;

//*  Calculando o novo salário
let novoSalario = salario + abono;

//* Lendo um número do usuário
let x = readlineSync.questionInt("Digite seu salário: ");
console.log("O número digitado é " + x);

// Exibindo o novo salário
console.log("Novo salário: " + novoSalario.toFixed(2));
