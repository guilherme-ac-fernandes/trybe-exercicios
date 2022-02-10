let n = 5;
let symbol = "#";
let noSymbol = " ";
let inputLine = "";
let inputPosition = n;


// Imprime uma pirâmide de tamanho N a direita

// Forma de estruturação da pirâmide direita retirada do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-e-logica-de-programacao/javascript-logica-de-programacao-e-algoritmos/solutions/83bb1cd0-be4a-40cf-a9c2-22d71f700144/gabarito-dos-exercicios/dbef6a68-2974-4129-9de4-9031d8d30b94?use_case=calendar

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
