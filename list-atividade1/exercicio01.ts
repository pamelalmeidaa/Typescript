
const readlineSync = require('readline-sync');

let vetorStrings = ["Azul", "Verde", "Amarelo", "Branco", "Laranja"];

console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");

let cores = [];

for (let i = 0; i < 5; i++) {
    let cor = readlineSync.question(`Digite a ${i + 1}ª cor: `);
    cores.push(cor); 
}

let array_nomes = vetorStrings.slice();


for (let i = 0; i < cores.length; i++) {
    array_nomes.push(cores[i]);
}
array_nomes.sort((a, b) => b.localeCompare(a));

console.log("\n++++++++++++++++ Saída ++++++++++++++++++");
console.log("\nArray em Ordem Decrescente \n");
for (let indice = 0; indice < array_nomes.length; indice++) {
    console.log(array_nomes[indice]);
}
