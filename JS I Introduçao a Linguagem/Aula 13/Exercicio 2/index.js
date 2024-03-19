const valor1 = window.prompt("Insira o Primeiro Valor: ")
const valor2 = window.prompt("Insira o Segundo Valor: ")

const x = parseFloat(valor1)
const y = parseFloat(valor2)

const soma = x + y
const subtaçao = x - y
const multiplicacao =  x * y
const divisao = x / y
 

window.alert(
    "Soma desses valores é igual a: " + soma +
    "\nSubtaçao desses valores é igual a: " + subtaçao +
    "\nMultiplicacao desses valores é igual a: " + multiplicacao +
    "\n Divisao desses valores é igual a: " + divisao
)