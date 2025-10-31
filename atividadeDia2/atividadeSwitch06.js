import readline from 'readline-sync'

let nome, codigo, cargo;
let salario, novoSalario, reajuste;

//exercicio 06 laco condicional

console.log("Digite o nome do colaborador: ");
nome = readline.question();

console.log("Digite o codigo: ");
codigo = readline.questionInt();

console.log("Digite o salario: ");
salario = readline.questionFloat();

console.log("____________________________________");


switch(codigo){
  case 1: 
    reajuste = 0.10 
    cargo = "Gerente"; 
    break;

  case 2: 
     reajuste = 0.07
     cargo = "Vendedor"; 
  break;

  case 3: 
     reajuste = 0.09 
     cargo = "Supervisor";  
    break;

    case 4:
     reajuste = 0.06 
     cargo = "Motorista";
    break;

    case 5:
     reajuste = 0.05 
     cargo = "Estoquista";    
    break;

    case 6: 
    reajuste = 0.08 
     cargo = "Técnico de TI";    
    break;

   default:
    console.log("opcao invalida");
}

if (codigo >= 1 && codigo <= 6) { //linha que evita o erro da pessoa digitar um codigo errado e dar NaN
  novoSalario = salario + (reajuste * salario);
  console.log(`Nome do colaborador: ${nome}  \nCargo: ${cargo} \nSalario: ${novoSalario.toFixed(2)}`);
}
