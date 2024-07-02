const leia = require('readline-sync');

let idade = 0;
let countMenor21 = 0;
let countMaior50 = 0;

console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");

while (idade >= 0) {
    idade = leia.questionInt("Digite a idade : ");
 
    if (idade < 0) {
        break;
    }

    if (idade < 21) {
        countMenor21++;
    } else if (idade > 50) {
        countMaior50++;
    }
}

console.log("\n++++++++++++++++ Saída ++++++++++++++++++");

console.log("Total de pessoas com menos de 21 anos: " + countMenor21);
console.log("Total de pessoas com mais de 50 anos: " + countMaior50);
console.log("++++++++++++++++++++++++++++++++++");