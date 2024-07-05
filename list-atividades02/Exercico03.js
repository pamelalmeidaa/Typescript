const leia = require('readline-sync');

let nome;
let idade;
let doacao;

nome = leia.question("\nDigite o Nome do doador : ");
idade = leia.questionInt("\nDigite a idade do doador: ");
doacao = leia.questionInt("\nPrimeira doacao de sangue?: Digite 1 para Sim e 0 para Nao ");


if (idade >= 18 && idade <= 69) {
    console.log("\nVocê está apto para doar sangue.");

    if (doacao === 1) {
        console.log("\nVocê está apto para doar sangue pela primeira vez.");
    } else {
        console.log("\nVocê já doou sangue antes.");
    }
} else {
    console.log("\nVocê não está apto para doar sangue de acordo com a idade.");
}