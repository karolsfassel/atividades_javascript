import readline from 'readline-sync';

//exercicio 3

let salbruto;
let adinot;
let hrextra;
let descontos;
let salliquido;

salbruto = readline.questionFloat("Digite o salario bruto: ");
adinot = readline.questionFloat("Digite adicional noturno: ");
hrextra = readline.questionFloat("Digite horas extras: ");
descontos = readline.questionFloat("Digite os descontos: ");

salliquido = salbruto + adinot + (hrextra * 5) - descontos;

console.log(`O salario liquido é: ${salliquido.toFixed(2)}`);