// Desafio 1
function compareTrue(valor1, valor2) {
  // seu código aqui
  if (valor1 === true && valor2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  let resultado = (base * height) / 2;
  return resultado;
}

// Desafio 3
function splitSentence(palavra) {
  // seu código aqui
  let resultado = [];
  let test = '';
  palavra += ' ';
  for (let i = 0; i < palavra.length; i += 1) {
    if (palavra[i] !== ' ') {
      test += palavra[i];
    } else {
      resultado.push(test);
      test = '';
    }
  }
  return resultado;
}

// Desafio 4
function concatName(lista) {
  // seu código aqui
  let resultado = '';
  for (let i = lista.length; i >= 0; i -= 1) {
    if (i === lista.length - 1) {
      resultado = lista[i];
    } else if (i === 0) {
      resultado += `, ${lista[i]}`;
    }
  }
  return resultado;
}

// Desafio 5
function footballPoints(win, tie) {
  // seu código aqui
  let total = win * 3;
  total += tie;
  return total;
}

// Desafio 6
function highestCount(lista) {
  // seu código aqui
  let test = -99;
  let count = 0;
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] > test) {
      test = lista[i];
    }
  }
  for (let i = 0; i <= lista.length; i += 1) {
    if (lista[i] === test) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  dist1 = Math.abs(dist1);
  dist2 = Math.abs(dist2);
  let resp = '';
  if (dist1 < dist2) {
    resp = 'cat1';
  } else if (dist1 > dist2) {
    resp = 'cat2';
  } else if (dist1 === dist2) {
    resp = 'os gatos trombam e o rato foge';
  }
  return resp;
}

// Desafio 8
function fizzBuzz(lista) {
  // seu código aqui
  let resp = [];
  for (let i = 0; i < lista.length; i += 1) {
    if (lista[i] % 3 === 0 && lista[i] % 5 === 0){
      resp.push('fizzBuzz');
    }else if (lista[i] % 5 === 0) {
      resp.push('buzz');
    } else if (lista[i] % 3 === 0 ){
      resp.push('fizz');
    }else{
      resp.push('bug!')
    }
  }
  return resp;
}

// Desafio 9
function encode(codigo) {
  // seu código aqui
  let resp = '';
  for (let i = 0; i < codigo.length; i += 1) {
    if (codigo[i] === 'a') {
      resp += '1';
    } else if (codigo[i] === 'e') {
      resp += '2';
    } else if (codigo[i] === 'i') {
        resp += '3';
    } else if (codigo[i] === 'o') {
      resp += '4';
    } else if (codigo[i] === 'u') {
      resp += '5' 
    } else{
      resp += codigo[i]
    }   
  }
  return resp;

}
function decode(decode) {
  // seu código aqui 
  let resp = '';
  for (let i = 0; i < decode.length; i += 1) {
    if (decode[i] === '1') {
      resp += 'a';
    } else if (decode[i] === '2') {
      resp += 'e';
    } else if (decode[i] === '3') {
      resp += 'i';
    } else if (decode[i] === '4') {
      resp += 'o';
    } else if (decode[i] === '5') {
      resp += 'u';
    } else {
      resp += decode[i];
    } 
  }
  return resp;
}
// Desafio 10
function techList(tech, nomes) {
  // seu código aqui
  let combined = [];
  if (tech ===[] || nome === '') {
    combined.push('Vazio')
  } else {
    for (let i = 0; i < tech.length; i++) {
      combined[i] = { tech:tech[i] ,nome: nome}
    }
  }
return combined
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
