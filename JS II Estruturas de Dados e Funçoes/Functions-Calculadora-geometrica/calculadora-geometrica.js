/*
Calculadora Geométrica
Escreva um programa em javascript para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferentes opções de cálculas. 
As opções devem ser:
área do triângulo: base * altura / 2
área do retângulo: base * altura
área do quadrado: lado²
área do trapézio: (base maior + base menor) * altura / 2
área do círculo: pi * raio² (considere pi = 3.14)
Você deve escrever o programa usando funções sempre que possível para separar os procedimentos. O programa também deve ter uma opção de “Sair” 
e enquanto ela não for escolhida deverá voltar ao menu.
*/
function areaDoTriagulo(){
    const base = prompt("Qual é a Base do Triângulo?")
    const altura = prompt("Qual é a altura do Triângulo?")
    return (base * altura) /2
}

function areaDoRetangulo(){
    const base = prompt("Qual é a Base do Retângulo?")
    const altura = prompt("Qual é a altura do Retângulo?")
    return (base * altura) 
}

function areaDoQuadrado(){
    const lado = prompt("Qual é o Lado do Quadrado?")
    return (lado * lado) 
}

function areaDoTrapezio(){
    const baseMaior = parseFloat(prompt("Qual é a Base Maior Do Trapezio?"))
    const baseMenor = parseFloat(prompt("Qual é a Base Menor Do Trapezio"))
    return (baseMaior * baseMenor) /2
}

function areaDoCirculo(){
    const raio = parseFloat(prompt("Informe o raio do círculo:"))
    return (3.14 * raio * raio)
}

function exibirMenu() {
    return prompt(
      "Calculadora Geométrica\n" +
      "1. Calcular área de triângulo\n" +
      "2. Calcular área de retângulo\n" +
      "3. Calcular área de quadrado\n" +
      "4. Calcular área de trapézio\n" +
      "5. Calcular área de círculo\n" +
      "6. Sair\n"
    )
  }
  
function executar(){
    let opcao = ""
    do{
        opcao = exibirMenu()
        let resultado

        switch(opcao){
            case "1":
            resultado = areaDoTriagulo()
            break
            case "2":
            resultado = areaDoRetangulo()
            break
            case "3":
            resultado = areaDoQuadrado()
            break
            case "4":
            resultado = areaDoTrapezio()
            break
            case "5":
            resultado = areaDoCirculo()
            break
            case "6":
            alert("Saindo...")
            break
            default:
            alert("Opçao invalida")
        }
        if(resultado){
            alert("Resultado:" + resultado)
        }
    }while(opcao !== "6");
}

executar()

