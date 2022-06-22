
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

for (let i = 0; i < numbers.length; i++) {
  soma= soma+numbers[i];
}

console.log(soma);

let mediaAritimetica = soma/numbers.length

console.log(mediaAritimetica);

if (mediaAritimetica>20) {
  console.log('valor maior que 20')
}else{
  console.log('valor menor ou igual a 20')
}
let maiorN = 0 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]> maiorN){
    maiorN=numbers[i]
  }
}
console.log(maiorN);

let impar =0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]%2 != 0){
    impar=impar+1;
  }
}
if (impar != 0){
  console.log("Há "+impar+" numeros impares na array")
}else{
  console.log("não tem numeros impares")
}

let mN = 0 
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i]> maiorN){
    maiorN=numbers[i]
  }
}