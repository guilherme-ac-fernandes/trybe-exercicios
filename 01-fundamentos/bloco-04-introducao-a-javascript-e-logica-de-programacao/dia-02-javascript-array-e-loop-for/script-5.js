let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = null;

// Encontrando o Maior valor no Array

for(let i = 0; i < numbers.length; i+=1){
    if(maiorValor < numbers[i]){
        maiorValor = numbers[i];
    }
}

console.log("O maior valor presente na Array é", maiorValor);