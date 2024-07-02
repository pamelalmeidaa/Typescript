const leia = require('readline-sync');

console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");
let numeros = [];
for (let i = 1; i <= 10; i++) {
    numeros.push(leia.questionInt(`Digite um número numero: `));
}

console.log("\n++++++++++++++++ Saída ++++++++++++++++++");
let pares = 0;
let impares = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log(`${numeros[i]} é par.`);
        pares++;
    } else {
        console.log(`${numeros[i]} é ímpar.`);
        impares++;
    }
}

console.log(`Total de números pares: ${pares}`);
console.log(`Total de números ímpares: ${impares}`);
