let n = 5;
let symbol = "#";
let noSymbol = " ";
let inputLine = "";

// Imprime uma pirâmide de tamanho N centralizada

// Forma de estruturação da pirâmide central proveniente do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar

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
