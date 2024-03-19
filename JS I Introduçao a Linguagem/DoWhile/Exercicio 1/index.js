

let opcao = ""


do{
  opcao = prompt("Escolha uma Opçao de 1 a 5? " +
  "\n1 - Opção Um" +
  "\n2 - Opção Dois" +
  "\n3 - Opção Três" +
  "\n4 - Opção Quatro" +
  "\n5 - Encerar "
  )

    switch(opcao){
        case "1":
          alert("Voce escolheu a Opçao 1 !")
        break
        case "2":
          alert("Voce escolheu a Opçao 2 !")
        break    
        case "3":
          alert("Voce escolheu a Opçao 3 !")
        break
        case "4":
           alert("Voce escolheu a Opçao 4 !")
        break
        case "5":
            alert("Voce escolheu Encerrar")
        break
        default:
          alert("Entrada invalida")
        }
}while(opcao !== "5");


