let n = 7;
let symbol = "#";
let noSymbol = " ";

// Imprime uma pirâmide de tamanho N centralizada com espaços internos

// Forma de estruturação da pirâmide central proveniente do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar


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
