let valor1 = 10
let valor2 = 25
let valor3 = 48
var res = 0

if (valor1>valor2) {
    if (valor1>valor3) {
        res = valor1
    }else{
        res = valor3
    }   
}else{
    if (valor2>valor3) {
        res = valor2
    }else{
        res = valor3
    }
}

console.log(res)