

let dinheiro = prompt("Qual a quantidade de dinheiro incial voce possui ?")



do{
 const situacao = prompt("Voce possui "+ dinheiro + "R$" +
  " Voce gostaria de Adiconar ou Remover dinheiro ou Sair ?")

    switch(situacao){
        case "adicionar":
          valor = prompt("Qual Valor voce quer ADICIONAR ?")
          final = parseFloat(valor) + parseFloat(dinheiro)
          alert("Voce Possuia " + dinheiro + "R$" + " Agora voce possui " + final )
        break
        case "remover":
          valor = prompt("Qual Valor voce quer REMOVER?")
          final = parseFloat(valor) + parseFloat(dinheiro)
          alert("Voce Possuia " + dinheiro + "R$" + " Agora voce possui " + final )
        break    
        default:
          alert("Encerrando...")
        }
}while(situacao != "Sair");


