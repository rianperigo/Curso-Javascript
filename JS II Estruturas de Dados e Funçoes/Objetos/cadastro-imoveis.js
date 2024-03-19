/*
Cadastro de Imóveis
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
1   Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
2   O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
3   O menu deve ter a opção de salvar um imóvel.
4   Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
5   Nome do proprietário.
6   Quantidade de quartos.
7   Quantidade de banheiros.
8   Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let novoImovel = []
let opcao = ""


do{
    opcao = prompt("Cadastro de Imoveis \nSelecione uma Opçao: \n1: Salvar Imovel \n2:Sair")

    switch(opcao){
        case "1": novoImovel = {}
            novoImovel.nomeDoPropietario =  prompt("Qual é o Nome do Propietario ?")
            novoImovel.quantidadeDeQuartos =  prompt("Qual é a Quantidade de quartos?")
            novoImovel.quantidadeDeBanheiros = prompt("Qual é a Quantidade de Banheiros?")
            novoImovel.garagem = prompt("Possui Banheiros ? (Sim/Nao)")

            const confirma = confirm(
                "Salvar esse imovel ?" + 
                "\nNome do Propietario" + novoImovel.nomeDoPropietario +
                "\nQuantidade de Quartos" + novoImovel.quantidadeDeQuartos +
                "\nQuantidade de Banheiros" + novoImovel.quantidadeDeBanheiros +
                "\nPossui Garagem ?"+ novoImovel.garagem
            )

            if(confirma){
                novoImovels.push(novoImovel)
            }
        break
        case "2":
            for (let i = 0; i < novoImovels.length; i++) {
              alert(
                "Imóvel " + (i + 1) +
                "\nProprietário: " + novoImovels[i].nomeDoPropietario +
                "\nQuartos: " + novoImovels[i].quantidadeDeQuartos +
                "\nBanheiros: " + novoImovels[i].quantidadeDeBanheiros +
                "\nPossui Garagem? " + novoImovels[i].garagem
              )
            }
            break
            case "3":
                alert("Saindo...")
                break
              default:
                alert("Opção inválida!")
                break

    }
}while(opcao !== "3");