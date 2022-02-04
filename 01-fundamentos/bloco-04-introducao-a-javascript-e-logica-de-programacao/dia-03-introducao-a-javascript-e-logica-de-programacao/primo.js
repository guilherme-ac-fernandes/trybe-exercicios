let number = 2;
let div = null;

for (let i = 1; i <= number; i+=1) {
    if(number % i == 0){
        div+=1; 
    }  
}
if(div == 2) {
    console.log("É primo");
}
else{
    console.log("Não é primo");
}  





// Encontrar números primos entre um intervalo (0 e 50) e informar o Maior


// Criando uma array com todos os números
for (let z = 1; z <= number; z+=1) {
    arrayNumber.push(z)
}


// Filtrando a array acima com o número dois e todos os ímpares
for (let x = 0; x < arrayNumber.length; x+=1) {
    if (arrayNumber[x] == 2) {
        numbersT.push(arrayNumber[x]);
    }
    else{
        restoImpar = arrayNumber[x]%2;
        if (restoImpar > 0  || restoImpar < 0){
            numbersT.push(arrayNumber[x]);
        } 
    }
}

// Realizando as verificações se um número é primo
for (let i = 0; i < numbersT.length; i+=1) {
    for (let j = 0; j < numbersT.length; j+=1) {
        // let number = numbersT[j];
        if (numbersT[i] % numbersT[j] === 0) {
            numbersPrimo.push(numbersT[i]);
        }
    }
}

 console.log(numbersPrimo);
