//# Exercício 2

//Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e 
//imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

let numeroUm = prompt("Digite um número");
let numeroDois = prompt("novamente");
console.log(numeroUm);
console.log(numeroDois);
console.log("O primeiro numero é maior que segundo?", numeroUm > numeroDois);
console.log("O primeiro numero é igual ao segundo", numeroUm === numeroDois);
console.log("O primeiro numero é divisível pelo segundo?", numeroUm % numeroDois === 0);
console.log("O segundo numero é divisível pelo primeiro?", numeroDois % numeroUm ===0);


//```
//O primeiro numero é maior que segundo? true
//O primeiro numero é igual ao segundo? false
//O primeiro numero é divisível pelo segundo? true
//O segundo numero é divisível pelo primeiro? true

//divisível = com resto zero

//Obs: O true ou false vai depender dos números inseridos e do resultado das operações.