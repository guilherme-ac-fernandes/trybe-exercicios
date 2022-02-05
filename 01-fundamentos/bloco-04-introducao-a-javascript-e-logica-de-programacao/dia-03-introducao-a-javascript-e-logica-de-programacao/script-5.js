let n = 5;

// Imprime formas geometricas com lado igual a N

for (let i = 0; i < n; i+=1) {
    for (let j = 1; j <= n; j++) {
        if (j !== n) {
            process.stdout.write("#");
        }
        else{
            process.stdout.write("#\n");
        } 
    }  
}


// Outra forma de resolução

// let n = 5;
// let symbol = "#";
// let inputLine = "";

// for (let i = 0; i < n; i +=1){
//    inputLine = inputLine + symbol;
//}
//
// for (let j = 0; j < n; j +=1){
//    console.log(inputLine);
//}
//