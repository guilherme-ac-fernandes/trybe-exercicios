let n = 7;
let symbol = "#";
let noSymbol = " ";

// Imprime uma pirâmide de tamanho N centralizada com espaços internos


let middle = (n + 1)/2;
let controlLeft = middle;
let controlRight = middle;


for(let i = 0; i <= middle; i +=1){
    let outputLine = "";
    for (let j = 1; j <= n; j+=1) {
        if (j == controlLeft || j == controlRight || i == middle) {
            outputLine += symbol;
        }
        else {
            outputLine += noSymbol;; 
        }
    }

    // para tirar uma posição a esquerda e a direita a cada interação
    controlRight +=1;
    controlLeft -=1;
    console.log(outputLine);
}