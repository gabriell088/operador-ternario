/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se uma pessoa é elegível para a aposentadoria. A variável idade 
contém a idade da pessoa e a variável sexo indica o sexo ( 'masculino' ou 
'feminino'). Atribua o resultado à variável elegivel. 
*/
let idade = 65
let sexo = 'feminino'

let elegivel = (sexo === 'feminino' && idade >= 60) || (sexo === 'masculino' && idade >= 65) ? "Elegível para aposentadoria." : "Não elegível para aposentadoria."

console.log(elegivel)
