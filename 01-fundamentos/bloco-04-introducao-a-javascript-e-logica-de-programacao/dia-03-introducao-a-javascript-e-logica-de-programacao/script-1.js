let number = 10;
let fatorial = 1;

// Criar Algoritmo que retorne fatorial de um número (número = 10)

for(let i = 1; i <= number; i+=1){
    fatorial = fatorial * i;
}

console.log("O fatorial do número ", number, "é igual a", fatorial);