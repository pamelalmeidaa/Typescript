const readlineSync = require('readline-sync');

//* Solicitando as informações ao usuário
let salarioBruto = readlineSync.questionInt("Digite o Salário Bruto: ");
let adicionalNoturno = readlineSync.questionInt("Digite o Adicional Noturno: ");
let horasExtras = readlineSync.questionInt("Digite as Horas Extras: ");
let descontos = readlineSync.questionInt("Digite os Descontos: ");

//* Calculando o valor líquido do salário
let salarioLiquido = salarioBruto + adicionalNoturno + (horasExtras * 5) - descontos;

//* Exibindo o valor líquido calculado
console.log("O valor líquido do salário é: " + salarioLiquido);


