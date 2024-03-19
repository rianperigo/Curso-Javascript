/*
Pilha de Cartas
Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na 
tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, 
“Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. 
Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
*/


let pilha = []
let cartas = ""


do{
    opcao = prompt(
        "Cartas: \n" + cartas +
        "\n Escolha um açao: \n 1 - Adicionar uma carta \n2 - Puxar uma carta \n3 - Sair")

 switch(opcao){
    case "1": let novaCarta = prompt("Qual é o nome dessa carta ?")
    pilha.push(novaCarta)
    break
    case "2": let removeCarta = pilha.pop()
    if (!removeCarta) {
        alert("Não há nenhuma carta no baralho!")
      } else {
        alert("Você puxou um(a) " + removeCarta)
      }
    break
    case "3": alert("Saindo...")
    break
    default: alert("Opçao Invalida.")
 }
}while( opcao !== "3")


