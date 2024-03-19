const nomev1 = window.prompt("Qual a Nome do Primeiro veiculo ?")
const v1 = window.prompt("Qual a velocidade do Primeiro veiculo ?")

const nomev2 = window.prompt("Qual a Nome do Segundo veiculo ?")
const v2 = window.prompt("Qual a velocidade do Segundo veiculo ?")

velocidadev1 = parseFloat(v1)
velocidadev2 = parseFloat(v2)

if (velocidadev1 > velocidadev2){
    window.alert("O " + nomev1 + " é mais rapido que o " + nomev2)
}else if (velocidadev1 < velocidadev2){
    window.alert("O " + nomev2 + " é mais rapido que o " + nomev1)
}else if(velocidadev1 === velocidadev2){
    window.alert("O " + nomev1 + " e o " + nomev2 + " Possuem a mesma Velocidade")
}