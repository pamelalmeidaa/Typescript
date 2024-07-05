const leia = require('readline-sync')

let mensagem;
mensagem = leia.question("\nDigite um valor do tipo string: ");
console.log("O valor string digitado foi:" + mensagem);