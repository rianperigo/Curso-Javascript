/*
Sistema de Vagas de Emprego
Escreva um programa em javascript que simule um sistema de vagas de emprego, onde é possível gerenciar as vagas e adicionar candidatos às vagas. Ele deve atender aos seguintes requisitos:
Ter um um menu onde é possível escolher entre as diferentes funcionalidades do sistema Listar vagas disponíveisCriar um nova vagaVisualizar uma vagaInscrever um candidato em uma vagaExcluir uma vagaSair
Listar vagas disponíveis
Criar um nova vaga
Visualizar uma vaga
Inscrever um candidato em uma vaga
Excluir uma vaga
Sair
A opção de listar as vagas deve mostrar o índice, o nome e a quantidade de candidatos inscritos de todas as vagas.
A opção de criar uma nova vaga deve pedir um nome para a vaga, uma descrição e uma data limite, e também deve pedir que o usuário confirme as informações antes de salvá-las.
A opção de visualizar uma vaga deve pedir o índice da vaga e mostrar todas as informações dela: índice, nome, descrição, data limite, quantidade de candidatos e o nome dos candidatos.
A opção de inscrever um candidato em uma vaga de pedir o nome do candidato, o índice da vaga e então uma confirmação exibindo as informações da vaga antes de salvar o candidato na vaga.
A opção de excluir uma vaga deve pedir o índice da vaga, mostrar suas informações e pedir que o usuário confirme a exclusão da vaga antes de realmente exclui-la.
Este é o exercício de revisão do módulo, então aproveite para utilizar todos os recursos vistos até agora sempre que possível, como os objetos, arrays e funções.
*/


const vagas = []

function listarVagas(){
  const vagaEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
    // 1.nome, quantidade de candidatos
    textoFinal += indice + ". "
    textoFinal += vagas.nome 
    textoFinal += " (" + vaga.candidatos.length + "candidatos)\n"
    return textoFinal
  }, "")

  alert(vagaEmTexto)
}

function novaVaga(){
  const nome = prompt("Informe um nome para a vaga:")
  const descricao = prompt("Infome uma descriçao para a vaga")
  const dataLimite = prompt("Informe uma data limite DD/MM/AAAA para a vaga")

  const confirmação = confirm(" Deseja Criar uma nova vaga com o " + nome + 
  "\n Descriçao da vaga: " + descricao + 
  "\n Data limite para a vaga: "+ dataLimite )

if (confirmação){
  const novaVaga = {nome,descricao,dataLimite,candidatos: []}
  vagas.push(novaVaga)
  alert("Vaga Criada.")
}
 }

 function exibirVaga(){
  const indice = prompt("Qual indice voce deseja exibir ?")
  const vaga = vagas[indice]

  const candidatosEmTexto = vaga.candidatos.reduce(function (textoFinal,candidato){
    return textoFinal + "\n -" + candidato
 }, "")
alert(
  "Vaga N " + indice + 
  "\nNome: " + vaga.nome +
  "\nDescriaço: " + vaga.descricao +
  "\nData Limite: " + vaga.dataLimite +
  "\nQuantidade de candidatos: " + vaga.candidato.length +
  "\nCandidatos incritos: " + candidatosEmTexto
) 
}

function increverCandidato() {
  const candidato = prompt("Informe o nome do (a) candidato ?")
  const indice = prompt("Informe o indice da vaga para qual o candidato deseja se inscrever")
  const vaga = vagas[indice]

  const confirmação = confirm("Deseja increver o candidato" + candidato + " na vaga " + indice + "?\n" + 
  "Nome: " + vaga.nome + "\nDescriçao: " + vaga.descricao +- "\nData Limite " + vaga.dataLimite
  )

if(confirmação){
  vaga.candidatos.push(candidato)
  alert("Incriçao Realizada")
}

function excluirVaga(){
  const indice = prompt("Informe o indice da vaga que voce deseja Excluir")
  const vaga = vagas[indice]

  const confirmação = confirm(
    "Tem certeza que deseja excluir a vaga" + indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescriçao: " + vaga.descricao +- "\nData Limite " + vaga.dataLimite
  )
if(confirmação){
  vagas.splice(indice, 1)
  alert("Vaga Excluida.")
}
}
}

function exibirMenu(){
  const opção = prompt(
    "Cadastro de Vagas de Emprego" + 
  "\n\n Escolha uma das opçoes: " + 
  "\n1. Listar vagas disponiveis" + 
  "\n2. Criar uma nova vaga" + 
  "\n3. Vizualizar uma vaga" + 
  "\n4. Inscrever um(a) Candidato" + 
  "\n5. Excluir uma vaga" +
  "\n6. Sair"
  )
  return opção
}

do{

  switch(opção){
    case "1":
    listarVagas()
    break
    case "2":
    novaVaga()
    break
    case "3":
    exibirVaga()
    break
    case "4":
    increverCandidato()
    break
    case "5":
    excluirVaga()
    break
    case "6":
    alert("Saindo...")
    break
    default:
      alert("Opçao Invalida")

  }
}while( opcao !== "6")




