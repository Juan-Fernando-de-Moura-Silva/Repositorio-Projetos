let listinha=[1,24,30,40,50,60,]

let valor = 24

for (let index = 0; index < listinha.length; index++){
  if(listinha[index] == valor){
    console.log(index);
  }
}

// ex 2

let impares = ""

for (let index = 1; index <= 50; index++) {
  if (index%2 != 0){
    impares = impares+index
    impares=impares.toString()
  }
  
}
console.log(impares)

//ex 3 

let numeroMinimo = 15
let numeroMaximo = 999
let count = 0
for (let index = numeroMinimo; index < numeroMaximo; index++){
  if (index%3==0){
    count++
  }
}
if (count>=50){
  console.log("Há 50 ou mais nummeros divisiveis por 3")
}else{
  console.log("sequencia muito pequena")
}
