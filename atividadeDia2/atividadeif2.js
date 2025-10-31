import readline from 'readline-sync'


//atividade 02 de if else

let numero;

numero = readline.questionInt("Digite o numero: ");


if (numero % 2 === 0) {  
    if (numero >= 0) {
        console.log("O número " + numero + " é par e positivo");
    } else {
        console.log("O número " + numero + " é par e negativo");
    }
} else {
    if (numero >= 0) {
        console.log("O número " + numero + " é ímpar e positivo");
    } else {
        console.log("O número " + numero + " é ímpar e negativo");
    }
}