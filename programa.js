//programa informando a média de nota do aluno

//Fase 1 - Bootloder apresentação e instruçõesCAR

function saudacao() {
    console.log('Olá seja bem-vindo(o) ao nosso programa analisador de média Iniciando...!')
}
saudacao()

//Fase 2 - inserir os dados, nome e matéria

const input = require('readline-sync')

function instrucoes() {
    console.log('Coloque os seus dados:!')
}
instrucoes()

let nome = String( input.question('Digite o seu nome:'))
let materia = String( input.question('Digite o nome da materia:'))
console.log(nome)
console.log(materia)

function insertnotas() {
    console.log('Digite as suas notas:!')
}
insertnotas()

//Fase 3 - inserir as notas e obter a media

let nota1 = Number( input.question('Digite a primeira nota:'))
let nota2 = Number( input.question('Digite a segunda nota:'))
let nota3 = Number( input.question('Digite a terceira nota:'))

let medianota = (nota1 + nota2 + nota3) /3

console.log(medianota)


let media = medianota

if (media >=7){
    console.log('Parabéns você foi Aprovada(o) :)')
} else if ( media >=5){
    console.log('Hum, infelizmente você está de Recuperação :|')
}else {
    console.log('Sinto informar, mas você está Reprovada(o) :(')
} 

console.log('Resultado informado com sucesso, programa finalizado!')
