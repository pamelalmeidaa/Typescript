const leia = require('readline-sync');

let vetor = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];
let num, encontrado;
console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");

num = leia.questionInt("Digite o numero que voce deseja encontrar: ");

encontrado = vetor.indexOf(num);

if (encontrado >= 0) {
    console.log(`O numero ${num} está localizado na posição: ${encontrado}`);
} else {
    console.log(`O numero ${num} não foi encontrado!`);
}

console.log("\n+++++++++++++++++++++++++++++++++++++++");