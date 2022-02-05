let n = 5;
let symbol = "#";
let noSymbol = " ";
let inputLine = "";

// Imprime uma pirâmide de tamanho N centralizada


let middle = (n + 1)/2;
let controlLeft = middle;
let controlRight = middle;


for(let i = 0; i <= middle; i +=1){
    for (let j = 0; j <= n; j+=1) {
        if (j > controlLeft && j < controlRight) {
            inputLine = inputLine + symbol;
        }
        else {
            inputLine = inputLine + " "; 
        }
    }
    console.log(inputLine);
    inputLine = "";
    // para tirar uma posição a esquerda e a direita a cada interação
    controlRight +=1;
    controlLeft -=1;
}