/*
palavra ='vamo que vamo';
let resultado =[];
let test ='';
palavra = palavra + ' ';
for (let i = 0; i < palavra.length+1; i++){
  if (palavra[i] != ' '){
    test = test + palavra[i];
  }else{
    resultado.push(test);
    test='';
  }
}
console.log(resultado);
*/
/*
lista = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']
let resultado = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (i === 0) {
      resultado[1]=lista[i];
    } else if (i === lista.length-1) {
      resultado[0] =', '+ lista[i];
    }
  }
  console.log(resultado);
  *//*
  let lista=[2, 15, 7, 9, 45]
  let resp = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 3 === 0 && lista[i] % 5 === 0){
      resp.push('fizzbuzz');
    }else if (lista[i] % 5 === 0) {
      resp.push('buzz');
    } else if (lista[i] % 3 === 0 ){
      resp.push('fizz');
    }else{
      resp.push('bug!')
    }
  }
  console.log(resp)*/
/*
  let decode = 'h2ll4';
  let resp = '';
  for (let i = 0; i < decode.length; i += 1) {
    if (decode[i] === '1') {
      reps += 'a'
    } else if (decode[i] === '2') {
      resp += 'e';
    } else if (decode[i] === '3') {
      reps += 'i';
    } else if (decode[i] === '4') {
      resp += 'o';
    } else if (decode[i] === '5') {
      resp += 'u';
    } else {
      resp += decode[i];
    }
  }
  console.log(resp)
  */
 /*
let tech = []
let nome = 'João'

  let combined = [];
  if (tech == 0) {
    combined='Vazio'
  } else {
    for (let i = 0; i < tech.length; i++) {
      combined[i] = { tech:tech[i] ,nome: nome}
    }
  }
console.log(combined)

return combined
*/
numeros = [5,'fjn']
let resp = '';
if (numeros != Number) {
  resp = 'não é possível gerar um número de telefone com esses valores';
} else if (numeros.length !== 11) {
  resp = 'Array com tamanho incorreto.';
} 
else {
  for (let i = 0; i <= numeros.length + 3; i++) {
    if (i == 0) {
      resp += '(';
    }else if (i == 1){
      resp += numeros[i-1];
    }else if (i == 2){
      resp += numeros[i-1];
    }else if (i == 3){
      resp += ')';
    }else if (i == 4){
      resp += ' '
    }else if (i > 4 && i<10){
      resp += numeros[i-3];
    } else if(i == 10){
      resp += '-';
    } else if(i > 10) {
      resp += numeros[i-4];
    }
  }
  console.log(resp);
  return resp;
}

for (var i = 0; i < numeros.length; i++) {
    
}
let resp = '';
if (numeros != Number) {
  resp = 'não é possível gerar um número de telefone com esses valores';
} else if (numeros.length !== 11) {
  resp = 'Array com tamanho incorreto.';
} else {
  for (let i = 0; i < numeros.length + 3; i += 1) {
    if (i == 0) {
      resp += '(';
    } else if (i === 1){
      resp += numeros[i-1];
    } else if (i === 2){
      resp += numeros[i-1];
    } else if (i === 3){
      resp += ')';
    } else if (i == 4){
      resp += ' ';
    } else if (i > 4 && i<10){
      resp += numeros[i-3];
    } else if (i === 10){
      resp += '-';
    } else if (i > 10) {
      resp += numeros[i-4];
    }
  }
  return resp;
}