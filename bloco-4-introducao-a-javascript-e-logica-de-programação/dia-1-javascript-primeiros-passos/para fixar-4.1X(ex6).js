let peça ="peão"

peça = peça.toUpperCase()

switch(peça){
    case "PEÃO":
        console.log(" move 1 casa para frente e pode tomar 1 casa a frente mas somente nas diagonais frontais")  
    break
    case "BISPO":
        console.log("move em qualquer casa que esteja em suas diagonais")
    break
    case "CAVALO":
        console.log("move 2 casas para frente e depois uma casa ou para a direita ou para esquerda")
    break
    case "TORRE":
        console.log("move em qualquer casa que esteja na sua horizontal ou vertical.")
    break
    case "RAINHA":
        console.log("move em qualquer casa tanto em sua diagonal quanto na sua horizontal ou vertical.")
    break
    case "REI":
        console.log("move em qualquer direção porem so uma casa.")
    break
}