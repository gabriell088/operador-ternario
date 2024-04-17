/*
Escreva um código JavaScript utilizando o operador ternário para 
determinar se um ano é bissexto. A variável ano contém o ano a ser verificado. 
*/
let ano = 2024

let bissexto = ano % 4 === 0 && (ano % 100 !== 0 || ano % 400 === 0) ? true : false

console.log(bissexto ? `${ano} é um ano bissexto.` : `${ano} não é um ano bissexto.`)

