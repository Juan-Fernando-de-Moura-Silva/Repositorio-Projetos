
let quadrado = document.getElementById('boa');
quadrado.addEventListener('click', mudardecor)
quadrado.addEventListener('mouseenter', esperando);
quadrado.addEventListener('mouseleave', saiu)

function mudardecor(){
  quadrado.style.backgroundColor ='green'
  quadrado.innerText = 'Clickou'
}

function esperando(){
  quadrado.style.backgroundColor ='yellow'
  quadrado.innerText = 'Esperando'

}

function saiu (){
  quadrado.style.backgroundColor ='antiquewhite'
  quadrado.innerText = 'Interaja...'
  quadrado.style.color ='rgb(2, 5, 4)'
}