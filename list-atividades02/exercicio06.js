const leia = require('readline-sync');

let nome;
let cargo;
let salario;
let reajuste = 0;

nome = leia.question("\nDigite o nome do colaborador: ");

console.log("\nCargos:");
console.log("1 - Gerente");
console.log("2 - Vendedor");
console.log("3 - Supervisor");
console.log("4 - Motorista");
console.log("5 - Estoquista");
console.log("6 - Técnico em TI");

cargo = leia.questionInt("\nDigite o codigo do cargo: ");

salario = leia.questionFloat("\nDigite o salario do colaborador: ");

switch (cargo) {
    case 1:
        reajuste = salario * 0.1;
        cargo = "Gerente";
        break;
    case 2:
        reajuste = salario * 0.07;
        cargo = "Vendedor";
        break;
    case 3:
        reajuste = salario * 0.09;
        cargo = "Supervisor";
        break;
    case 4:
        reajuste = salario * 0.06;
        cargo = "Motorista";
        break;
    case 5:
        reajuste = salario * 0.05;
        cargo = "Estoquista";
        break;
    case 6:
        reajuste = salario * 0.08;
        cargo = "Técnico de TI";
        break;
    default:
        console.log("Digite uma opção válida!");
}

let novoSalario = salario + reajuste;

console.log(`\nNome do Colaborador: ${nome}`);
console.log(`Cargo: ${cargo}`);
console.log(`Salário Reajustado: R$ ${novoSalario.toFixed(2)}`); 
