let numero1 = 1;
let numero2 = 4;
let numero3 = 9;


// Avalia se pelo menos um dos três números é par

let restoNumero1 = numero1 % 2;
let restoNumero2 = numero2 % 2;
let restoNumero3 = numero3 % 2;

if (restoNumero1 === 0 || restoNumero2 === 0 || restoNumero3 === 0){
    console.log("Pelo menos um dos números é par")
}
else{
    console.log("Todos os números são ímpares")
}