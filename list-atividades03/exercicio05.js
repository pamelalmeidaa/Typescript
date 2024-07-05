const leia = require('readline-sync');

let numero;
let somaPositivos= 0;

console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");
do {
    numero = leia.questionInt("Digite um numero: ");

    if (numero > 0) {
        somaPositivos += numero;
    }
} while (numero !== 0);

console.log("\n++++++++++++++++ Saída ++++++++++++++++++");
console.log("A soma dos números positivos é: " + somaPositivos);

