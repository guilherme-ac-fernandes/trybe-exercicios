let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;

// Somar os valores contidos no array e informar o total

for (let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i];
}

console.log("O total da soma dos itens no array é igual a ", sum);