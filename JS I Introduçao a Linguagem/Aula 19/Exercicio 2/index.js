const atacante = window.prompt("Qual é o nome do Personagem ?")
const PoderDeataque = window.prompt("Qual pe o poder de ataque desse personagem ?")
const defensor = window.prompt("Qual é o nome do Segundo Personagem ?")
const pontosDeVida = window.prompt("Quantos pontos de vida tem esse personagem ?")
const poderDeDefesa = window.prompt("Qual pe o poder de Defesa desse personagem ?")
const possuiEscudo = window.prompt ("Ele Possui um escudo ? (Sim/Nao")

const danoCausado = 0

if(PoderDeataque > poderDeDefesa && possuiEscudo === "Nao"){
    danoCausado =  PoderDeataque - poderDeDefesa
}else if(PoderDeataque > poderDeDefesa  && possuiEscudo = "Sim" ){
    danoCausado = (PoderDeataque - poderDeDefesa) /2
}


pontosDeVida -= danoCausado

window.alert(atacante + " causou " + danoCausado)



