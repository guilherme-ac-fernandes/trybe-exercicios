let number = 47;
let div = 0;


// Informa se um número é primo ou não

  
for (let i = 1; i <= number; i+=1) {
    if(number % i == 0){
        div+=1; 
    }  
}
if(div == 2) {
    console.log("Número", number, "é primo");
} 
else{
    console.log("Número", number, "não é primo");
}
