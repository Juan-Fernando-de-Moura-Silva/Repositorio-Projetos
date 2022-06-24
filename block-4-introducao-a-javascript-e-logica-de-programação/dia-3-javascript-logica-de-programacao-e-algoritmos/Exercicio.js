// 1 - 
// Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
//A soma total de 1 a 50 é:
let resultado =0

for (let i = 1; i <= 50; i+=1 ){
  resultado += i
}
console.log("O resultado de 1 a 50 e: "+ resultado)
//2 -

// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
let count =0
for (let i = 2; i <= 150; i+=1 ){
  if (i%3==0){
    count +=1
  }
}
if (count>=50){
  console.log("Super secreto"+count)
}else{
  console.log("normalmente"+count)
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 

let player1 = "pedra"
let player2 = "Tesoura"

if (player1=="papel" && player2=="Tesoura"){
  console.log("Player 2 won")
}else if (player1 == 'pedra' && player2=='Tesoura'){
  console.log("Player 1 won")
}else if (player1 =='Tesoura' && player2=='Tesoura'){
  console.log("Ties")
}
else if (player1 == 'pedra' && player2=='papel'){
  console.log("Player 2 won")
}else if (player1 =='papel' && player2=='papel'){
  console.log("Ties")
}
else if (player1 =='pedra' && player2=='pedra'){
  console.log("Ties")
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let idade = 25

if (idade > 18 ){
  console.log ("A pessoa é maior de idade")
}else if (idade < 18){
  console.log ("A pessoa não e maior de idade")
}else{
  console.log("Pode ir preso")
}

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 20
let Murilo = 61
let Baêta = 40

if (Carolzita<Murilo){
  if(Carolzita < Baêta){
    console.log("Carolzita"+Carolzita+"é a mais nova")
  }
}
