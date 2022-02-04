let number = 50;
let div = null;
let arrayNumber = [];

let restoImpar = null;
let numbersT = [];
let numbersPrimo = [];



// Criando uma array com todos os números
for (let z = 1; z <= number; z+=1) {
    arrayNumber.push(z)
}
    
for (let i = 1; i <= arrayNumber.length; i+=1) {
    if(arrayNumber[i] % i == 0){
        div+=1; 
    } 
if(div == 2) {
    console.log("É primo");
}
else{
     console.log("Não é primo");
}      
}



 








