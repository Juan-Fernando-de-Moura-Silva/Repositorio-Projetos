
let numero = 10
let resultado = 0

for (let i = numero-1; i > 0; i--) {
  if (resultado == 0){
    resultado=numero*i
  }else{
    resultado=resultado*i
  }
}
console.log(resultado)

//ex 2

let word = 'tryber';
let wordR =''

for (let i = word.length-1; i >=1; i--) {
wordR = wordR+word[i] 
}
console.log(wordR)

//ex 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorP = 0
let menorP = 999
let palavraG = ""
let palavraP = ""

for (let i = array.length-1; i >= 0; i--) {
  let test = array[i].length 
  if (maiorP < test){
    palavraG = array[i] 
    maiorP = test
  }
  if (menorP > test){
    palavraP =array[i]
    menorP = test 
  }
}
console.log(palavraG)
console.log(palavraP)

// ex4 e primo
let primo = 0
let count = 0
 
for (let i =0; i <=50; i++) {
  
  for ( let j = 0; j <= i; j++ ) {

    if ( i%j == 0 ) {
      count++;
    }
  }

  if ( count == 2) {
    primo = i
  }

  count =0

}
console.log(primo)

