const custo = 1000
const venda = 1500
let custoB = 0

if (custo>0 && venda>0){
    custoB = venda - custo
}else{
    console.log("valor invalido")
}

let custoL = (custoB-(custoB/5))*100

console.log(custoL)

let valorbruto = 2000
let inss =0

if (valorbruto<=1556.94){
    inss = (valorbruto*0.08)
}else if (valorbruto<= 2594.92){
    inss = (valorbruto*0.09)
}

console.log(inss)