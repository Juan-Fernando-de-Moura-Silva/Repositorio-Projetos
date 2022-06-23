/*
const marina = 10
const Silvia = 65
const iza = 25

if (marina < Silvia){
    if (marina < iza) {
        console.log(" Marina e a mais joven e possui " +marina+" anos de idade") 
        
    }else{
        console.log("Iza e a mais joven e possui " +iza+" anos de idade")
    }
}else if(Silvia< iza){
  console.log("Silvia e a mais joven e possui " +Silvia+" anos de idade")

}
*/
//ex2
/*
let age = 12
let sex = 'M'
let altura = 159
let peso = 59
let BMr = undefined

if (sex == 'M'){
  BMr = (altura*6.25)+(peso*9.99)-(age*4.92)+5
}else{
  BMr = (altura*6.25)+(peso*9.99)-(age*4.92)-161
}

console.log("A taxa metabolica basal e : "+BMr+" Kcal")
*/
//ex 3
let menu = undefined

switch (menu){
  case 1: 
    console.log("1 - Trybe Lanche Feliz")
  
  break
  case 2: 
    console.log("2 - McTrybe")   
  
  break;
  case 3: 
    console.log("3 - TrybeWooper")  
  
  break;
  case 4: 
    console.log( "4 - X-Trybe") 
  
  break;
  case 5: 
    console.log("5 - Triplo Trybe com JS")  
  
  break;
  default:
    console.log("Ainda não possuímos esta opção :(")
  
}