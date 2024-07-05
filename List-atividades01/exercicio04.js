const diferenca = require("readline-sync");
//* solicitação de informações ao úsuario 
let n1 = diferenca.questionFloat("Digite o primeiro numero: ");
let n2 = diferenca.questionFloat("Digite o segundo numero: ");
let n3 = diferenca.questionFloat("Digite o terceiro numero: ");
let n4 = diferenca.questionFloat("Digite o quarto numero: ");
//*
let diferencaFinal = (n1 * n2) - (n3 * n4);

//* exibindo valor do calculo
console.log("A diferença entre os valores é: " + diferencaFinal.toFixed(2));