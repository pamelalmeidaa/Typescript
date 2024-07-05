const readline = require("readline-sync");

let num1 = readline.questionFloat("\nDigite um numero: ");

if (num1 > 0) {
    console.log("O número " + num1 + " é positivo.");
} else if (num1 < 0) {
    console.log("O número " + num1 + " é negativo.");
} else {
    console.log("O número " + num1 + " é zero.");
}

if (num1 % 2 === 0 && num1 !== 0) {
    console.log("O número " + num1 + " é par.");
} else if (num1 !== 0) {
    console.log("O número " + num1 + " é ímpar.");
}