// Criar função que calcule o fatorial de um número
// Baseado na função já realizanda anteriormente 
// source: https://github.com/guilherme-ac-fernandes/trybe-exercicios/blob/main/01-fundamentos/bloco-04-introducao-a-javascript-e-logica-de-programacao/dia-03-introducao-a-javascript-e-logica-de-programacao/script-01.js
let fatorialNumber = (number) => {
    let fatorial = 1
    for (let i = 1; i <= number; i += 1) {
        fatorial *= i
    }
    return fatorial;
}

console.log(fatorialNumber(4));

// Resolvendo utilizando ternary operator
// Resolução de forma recursiva proveniente do course da Trybe
// source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/javascript-es6-parte-1/solutions/81c644e5-1f1b-467a-89a2-909bcc625c8a/gabarito-dos-exercicios/a28fa634-61a2-440a-a32a-8fd1aca67fc9?use_case=calendar
let farorialTernaryOperator = number => number > 1 ? number * farorialTernaryOperator(number - 1) : 1;

console.log(farorialTernaryOperator(4));