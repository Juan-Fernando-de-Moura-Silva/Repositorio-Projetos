let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let cars = ["Saab", "Volvo", "BMW"];

for (let i=0;i < groceryList.length;i++) {
	console.log(groceryList[i]);
}
for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}

let fruta =['banana', 150, true] 
for (let valor in fruta){
  console.log(valor);
}

let numeros = [1,2,3,4,5];
for(let numero of numeros) {
  console.log(numero);
}

let word = 'Hello';
for (let letter of word) {
  console.log(letter);
}

let arrOfNumbers = [10, 20, 30];
for (let sum of arrOfNumbers) {
  sum += 1;
  console.log(sum);
}