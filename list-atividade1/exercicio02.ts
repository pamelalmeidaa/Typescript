import leia = require("readline-sync");

const nums: Set<number> = new Set<number>();
console.log("\n++++++++++++++++ Entrada ++++++++++++++++++");

for (let i = 0; i < 10; i++) {
    nums.add(leia.questionInt("Digite um numero: "));
}
console.log("\n++++++++++++++++ Saída ++++++++++++++++++");

console.log("\nNumeros digitados:");
for (let numero of nums) {
    console.log(numero);
}
