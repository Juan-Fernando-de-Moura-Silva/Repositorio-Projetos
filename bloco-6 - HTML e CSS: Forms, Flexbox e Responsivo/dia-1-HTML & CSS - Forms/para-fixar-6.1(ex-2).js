// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function entrada(event){
  event.preventDefault()

 //let vText = INPUT_TEXT.value;
 //console.log(vText);
}

function dividido(valor){
 let x = valor.keydown
  if (x === 'a'){

  }else{
    entrada();
  }
}

HREF_LINK.addEventListener('click', entrada);

INPUT_CHECKBOX.addEventListener('click', entrada)

INPUT_TEXT.addEventListener('keydown', dividido);

