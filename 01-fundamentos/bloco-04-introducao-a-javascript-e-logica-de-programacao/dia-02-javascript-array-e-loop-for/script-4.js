let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sum = null;
let media = null;

// Informar se média é maior, menor ou igual a 20

for(let i = 0; i < numbers.length; i+=1){
    sum = sum + numbers[i];
}

media = sum/(numbers.length)


if(media > 20){
    console.log("A média é", media, "= Valor maior que 20");
}
else if(media < 20){
    console.log("A média é", media, "= Valor menor que 20");
}
else{
    console.log("A média é", media, "= Igual o valor de referência");
}