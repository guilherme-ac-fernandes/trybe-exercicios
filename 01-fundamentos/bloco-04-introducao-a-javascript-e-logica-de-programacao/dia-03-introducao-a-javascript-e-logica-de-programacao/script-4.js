let number = 50;
let div = 0;
let numberOdd = [];


// Encontrar números Primos e informar o maior do intervalo [1,50]
for (let j = 1; j <= number; j+=1) {
    div = 0; 
    for (let i = 1; i <= j; i+=1) {
        if(j % i == 0){
            div+=1; 
        }  
    }
    if(div == 2) {
        numberOdd.push(j)
    } 
}

console.log("Valores Primos no intervalo =", numberOdd);

console.log("Maior valores primos no intervalo =", numberOdd[numberOdd.length-1]);


