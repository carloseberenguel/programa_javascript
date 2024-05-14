const input = require('readline-sync')

function saudacao() {
    console.log('Olá seja bem-vindo(o) ao nosso programa analisador de média Iniciando...!')
}
saudacao()

let nota;
let soma = 0;


for (n=1; n <=3; n++){
    nota = Number (input.question(`Informe a nota ${n} do aluno: `))

   soma = soma + nota /3
}

console.log(`A média do aluno é:  ${soma}.`)

if (soma >= 7 ){
    console.log('Parabéns você foi Aprovada(o) :)')
} else if (soma >= 5 && soma <= 6.9){
    console.log('Hum, infelizmente você está de Recuperação :|')
}else {
    console.log('Sinto informar, mas você está Reprovada(o) :(')
} 
console.clear()
console.log('Resultado informado com sucesso, programa finalizado!')