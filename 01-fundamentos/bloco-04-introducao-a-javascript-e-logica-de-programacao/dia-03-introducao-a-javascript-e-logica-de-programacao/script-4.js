let number = 50;
let div = null;


// Encontrar números primos entre um intervalo (0 e 50) e informar o Maior

for (let j = 1; j <= number; j+=1) {
    
    for (let i = 1; i <= j; i+=1) {
        if(j % i == 0){
                div+=1; 
        } 
             
    }
    if(div == 2) {
        console.log("É primo");
    }
    else{
        console.log("Não é primo");
    } 

}
