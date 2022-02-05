let n = 5;
let symbol = "#";
let noSymbol = " ";
let inputLine = "";
let inputPosition = n;


// Imprime uma pirâmide de tamanho N a direita


for(let i = 0; i < n; i +=1){
    for (let j = 0; j <= n; j+=1) {
        if (j < inputPosition) {
            inputLine = inputLine + noSymbol;
        }
        else {
            inputLine = inputLine + symbol; 
        }
    }
    console.log(inputLine);
    inputLine = "";
    // para ir ignorando a última linha a cada interação
    inputPosition -=1;
}