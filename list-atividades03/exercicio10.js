const readline = require('readline-sync');

let matrizNotas = [];
let vetorMedias = [];

for (let i = 0; i < 10; i++) {

    matrizNotas[i] = [];

    console.log(`Digite as notas do participante ${i + 1}:`);


    for (let j = 0; j < 4; j++) {
        let nota = readline.questionFloat(`Nota do ${j + 1}º bimestre: `);
        matrizNotas[i].push(nota);
    }

    let media = calcularMedia(matrizNotas[i]);
    vetorMedias.push(media);
}

function calcularMedia(notas) {
    let soma = 0;
    for (let nota of notas) {
        soma += nota;
    }
    return soma / notas.length;
}

console.log("\nMédias dos participantes:");
for (let i = 0; i < 10; i++) {
    console.log(`Participante ${i + 1}: ${vetorMedias[i].toFixed(2)}`);
}
