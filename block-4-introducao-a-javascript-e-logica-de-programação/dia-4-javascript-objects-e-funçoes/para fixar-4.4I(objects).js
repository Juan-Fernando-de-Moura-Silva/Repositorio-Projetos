//objetos 
let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
  1: true,
}; 

console.log(car.type);

console.log(car['model']);

console.log(car['1']);

let player = {
  name: 'Marta',
  lastName: 'Silva',
  age: 34,
  medals: { golden: 2, silver: 3 },
}

console.log("A jogadora "+player.name+" "+player.lastName+" tem "+player.age+" anos de idade.");

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018] //Adicionando uma nova informação

console.log(player)

let melhor =0

for (let i = 0; i < player.bestInTheWorld.length; i++){
melhor += 1
}

console.log("A jogadora "+player.name+" "+player.lastName+"foi eleita a melhor do mundo por "+melhor+" Vezes")

console.log("A jogadora "+player.name+" "+player.lastName+" possui " +player.medals.golden +" medalhas de ouro e " +player.medals.silver +" medalhas de prata")

 const newObject = { chave : 'valor' };
 
console.log(newObject)

const trybeStudent = { 
  name: "Luiza",
  age: 25,
  class: 15,
  };

  