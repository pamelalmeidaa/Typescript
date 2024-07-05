import { Stack } from '../interface/Stack';
import leia = require("readline-sync");

const pilha = new Stack<string>();
let opcao: number;

do {
  console.log("\n***********Menu***********");
  console.log("1 - Adicionar livro na pilha");
  console.log("2 - Listar todos os livros");
  console.log("3 - Retirar livro da pilha");
  console.log("0 - Sair");
  console.log("**********************");

  opcao = leia.questionInt("Digite a opcao desejada: ");

  switch (opcao) {
      case 1:
          pilha.push(leia.question("\nDigite o nome: "));
          console.log("\nLista de livros:\n");
          pilha.printStack();
          console.log("\nLivro adicionado!");
          break;
      case 2:
          if (pilha.isEmpty()) {
              console.log("\nA pilha está vazia!");
          } else {
              console.log("\nLista de livros:\n");
              pilha.printStack();
          }
          break;
      case 3:
          if (pilha.isEmpty()) {
              console.log("\nA pilha está vazia!");
          } else {
              pilha.pop();
              console.log("\nLista de livros:\n");
              pilha.printStack();
              console.log(`\nUm livro foi retirado da pilha!`);
          }
          break;
      case 0:
          console.log("\nPrograma finalizado!");
          break;
      default:
          console.log("\nOpção inválida!");
          break;
  }
} while (opcao !== 0);
