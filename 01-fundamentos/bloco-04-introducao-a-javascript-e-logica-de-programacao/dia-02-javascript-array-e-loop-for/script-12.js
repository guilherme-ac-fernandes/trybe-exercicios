let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numbersFibo = [];

// Aplicar lógica da sequência Fibonacci no Array

for(let i = 0; i < numbers.length; i+=1){
    if(i < numbers.length-1){
        numbersFibo.push(numbers[i]*numbers[i+1])
    }
    else{
        
        numbersFibo.push(numbers[i]*2);
    }
    
}
console.log("Aplicando lógica =", numbersFibo);