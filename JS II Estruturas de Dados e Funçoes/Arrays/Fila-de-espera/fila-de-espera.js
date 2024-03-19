/*
Fila de Espera
Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 
O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes 
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).
 O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo 
 paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro 
 paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser 
 encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.
 */

 let fila = []
 let opcao = ""

 do{
    let pacientes =""
    for(let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }

    opcao = prompt(
        "Pacientes: \n" + pacientes +
        "\n Escolha um açao: \n 1 - Novo Paciente \n2 - Consultar Paciente \n3 - Sair"
    )

    switch(opcao){
        case "1": novoPaciente = prompt("Qual é o nome do novo paciente ?")
        fila.push(novoPaciente)
        break
        case "2": const pacienteConsultado = fila.shift()
        break
        case "3": alert("Saindo...")
        break
        default: alert("Opçao invalida")
        break
    }
 }while(opcao !== "3");

 