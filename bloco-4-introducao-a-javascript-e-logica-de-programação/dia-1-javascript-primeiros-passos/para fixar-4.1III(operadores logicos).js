
//Operador && ambos os tests devem ser verdadeiro para passar.

let currentHour = 12;
let message = '';

if (currentHour>=22) {
    message = 'Não deveríamos comer nada, é hora de dormir';
    console.log(message);
}else if (currentHour>=18 && currentHour<22){
    message = 'Rango da noite, vamos jantar :D'
    console.log(message);
}else if (currentHour>= 14 && currentHour<18){
    message = 'Vamos fazer um bolo pro café da tarde?'
    console.log(message);
}else if (currentHour>=11 && currentHour<14){
    message = 'Hora do almoço!!!'
    console.log(message);
}else if (currentHour>=4 && currentHour<11){
    message = 'Hmmm, cheiro de café recém passado'
    console.log(message);
}

//Operador || um dos tests deve ser verdadeiro para passar.

let weekDay ="quarta-feira"
if (weekDay == 'segunda-feira'|| weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay =='sexta-feira'){
    console.log('Oba, mais um dia de aprendizado na Trybe >:D');
}else{
    console.log('FINALMENTE, descanso merecido UwU')
}

//Operador ! ou != os tests devem ser falsos para dar verdadeiro.

let numero ="verdade"
console.log('dentro de "numero" contem ' +numero+ '.')

console.log( 'Em "numero" contem um numero?')

if (numero != Number){
    console.log('"numero" não tem um numero detro dele. ele tem '+numero+' detro dele')

}else{
    console.log('"numero" tem um numero detro dele')
}