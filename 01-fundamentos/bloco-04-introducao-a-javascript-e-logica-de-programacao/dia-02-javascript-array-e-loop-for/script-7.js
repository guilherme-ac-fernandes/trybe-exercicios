let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorValor = numbers[0];

// Encontrando o Menor valor no Array

for(let i = 0; i < numbers.length; i+=1){
    if(menorValor > numbers[i]){
        menorValor = numbers[i];
    }
}

console.log("O menor valor presente na Array é", menorValor);