let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resto = null;
let numbersOdd = [ ];
let odd = null;

// Descobri se tem valores ímpares e informa-los

// Encontrando os valores ímpares
for(let i = 0; i < numbers.length; i+=1){
    resto = numbers[i]%2;
    if (resto > 0  || resto < 0){
        numbersOdd.push(numbers[i])
        odd +=1;
    }

}

// Informando se foi encontrando e quais são ímpares
if (odd > 0){
    console.log("Valores ímpares =", numbersOdd.sort(function(a, b){return a-b}));
}
else{
    console.log("Nenhum valor ímpar encontrado");
}


