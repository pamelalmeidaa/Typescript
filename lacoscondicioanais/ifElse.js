const leia = require('readline-sync')

let nome;
let idade;

nome = leia.question("\nDigite seu nome : ")
idade = leia.questionInt("n\Digite sua idade: ")

if(idade >= 0 && idade <= 10){
   console.log("\nO seu Plano de Saude custara r$ 100,00 por mes. ");

}else if(idade >= 10 && idade <= 29){
    console.log("\nO seu Plano de Saude custara r$ 200,00 por mes. ");
}
else if(idade >= 29 && idade <= 45){
    console.log("\nO seu Plano de Saude custara r$ 300,00 por mes. ");
}
else if(idade >= 45 && idade <= 59){
    console.log("\nO seu Plano de Saude custara r$ 500,00 por mes. ");
}
else if(idade >= 59 && idade <= 65){
    console.log("\nO seu Plano de Saude custara r$ 600,00 por mes. ");
}

else{  
    console.log("\no seu Plano de Saude custara r$ 1000,00 por mes. ");}
