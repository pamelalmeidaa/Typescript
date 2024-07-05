const readline = require('readline-sync');

let pedido;
let produto;
let valorUnitario;
let quantidade;

console.log("\n Produtos ");
console.log(" 1 -- Cachorro Quente ");
console.log(" 2 -- X-Salada ");
console.log(" 3 -- X-Bacon ");
console.log(" 4 -- Bauru");
console.log(" 5 -- Refrigerante ");
console.log(" 6 -- Suco de Laranja ");

pedido = readline.questionInt("\nDigite o codigo do seu pedido: ");

switch (pedido) {
    case 1:
        produto = "Cachorro Quente";
        valorUnitario = 4.50;
        break;
    case 2:
        produto = "X-Salada";
        valorUnitario = 15.00;
        break;
    case 3:
        produto = "X-Bacon";
        valorUnitario = 18.00;
        break;
    case 4:
        produto = "Bauru";
        valorUnitario = 12.00;
        break;
    case 5:
        produto = "Refrigerante";
        valorUnitario = 5.00;
        break;
    case 6:
        produto = "Suco de Laranja";
        valorUnitario = 8.00;
        break;
    default:
        console.log("\nCódigo do pedido inválido!");
}

quantidade = readline.questionInt("Digite a quantidade desejada: ");


let valorTotal = valorUnitario * quantidade;


console.log(`\nProduto: ${produto}`);
console.log(`Valor unitário: R$ ${valorUnitario.toFixed(2)}`);
console.log(`Quantidade: ${quantidade}`);
console.log(`Valor total: R$ ${valorTotal.toFixed(2)}`);
