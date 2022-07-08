
let resultado = "Aprovado"

switch(resultado){
    case "Aprovado":
        let weekDay ="quarta-feira"
        if (weekDay == 'segunda-feira'|| weekDay == 'terça-feira' || weekDay == 'quarta-feira' || weekDay == 'quinta-feira' || weekDay =='sexta-feira'){
            console.log('Oba, mais um dia de aprendizado na Trybe >:D');
        }else{
            console.log('FINALMENTE, descanso merecido UwU')
        }
    
    break;
    
    case "Espera":
        console.log('Não Peca as eperanças você ainda pode ser chamado')
    break;

    case "reprovado":
        console.log('Olha não foi dessa vez mas você pode estudar mais e passar na proxima.')
        break;
    default:
        console.log('não se aplica')

}