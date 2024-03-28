function addMotora(){
    const caminhao = document.getElementById('caminhao')
    const nome = document.getElementById('nome')
    const rg = document.getElementById('rg')

    const confirmacao = confirm("Adicionar " + nome + "Com o Caminhao" + caminhao + "?")

    if(confirmacao){
        const motoraLista = document.getElementById('motoralista')
        const motorista = document.createElement('li')
        motorista.id = 'Motorista -' + rg
        motorista.innerText = caminhao + ": "+ nome + "(" + rg + ")"
        motoraLista.appendChild(motorista)

        
        document.getElementById('rg').value = ''
        document.getElementById('nome').value = ''
        document.getElementById('caminhao').value = ''
    }
}

function removermotora(){
    const numberrg = document.getElementById('rgRemove').value
    const motoraRemove = document.getElementById('Motora - ' + numberrg)

    const confirmation = confirm('Remover Motorista' + motoraRemove.innerText + '?')

    if(confirmation){
        document.getElementById('motoralista').removeChild(motoraRemove)
        document.getElementById('rgRemove').value = ''
    }
}