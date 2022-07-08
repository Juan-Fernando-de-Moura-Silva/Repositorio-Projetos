var angulo1 = 80
var angulo2 = 30
var angulo3 = 70
if (angulo1>178 || angulo1<0 || angulo2>178 || angulo2<0 || angulo3>178 || angulo3<0){
    console.log("valor de anglo errado") 
}
var somaAngular = angulo1+angulo2+angulo3

if (somaAngular == 180) {
    console.log('temos um triangulo')
    return (true);
}else{
    console.log('não temos um triangulo')
    return (false);
}