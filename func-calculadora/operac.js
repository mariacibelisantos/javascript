/*
function soma(numeroDois, numeroCinco){
    return Number(numeroDois) + Number(numeroCinco)
}

function subtracao(numeroDois, numeroCinco){
    return Number(numeroDois) - Number(numeroCinco)
}

function multiplicacao(numeroDois, numeroCinco){
    return Number(numeroDois) * Number(numeroCinco)
}

function divisao(numeroDois, numeroCinco){
    return Number(numeroDois) / Number(numeroCinco)
}

soma(2, 5);
subtracao(2, 5);
multiplicacao(2, 5);
divisao(2, 5);
*/
function calcular(){
let numero1 = prompt("Digite o primeiro número: ")
let numero2 = prompt("Digite o segundo número" )
let op = prompt("Digite a operação: ")
let operacao = op.toLowerCase()

if(operacao == "soma") {
    alert(Number(numero1) + Number(numero2))
}
else if(operacao == "subtracao") {
    alert(Number(numero1) - Number(numero2))
}
else if(operacao == "multiplicacao") {
    alert(Number(numero1) * Number(numero2))
}
else if(operacao == "divisao") {
    alert(Number(numero1) / Number(numero2))
}
}
calcular()