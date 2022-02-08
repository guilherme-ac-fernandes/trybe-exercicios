let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;
let media = null;

// Calculo da Média Aritmética dos valores contidos no Array

for(let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i];
}

media = sum/(numbers.length)

console.log("A média é igual a ", media);