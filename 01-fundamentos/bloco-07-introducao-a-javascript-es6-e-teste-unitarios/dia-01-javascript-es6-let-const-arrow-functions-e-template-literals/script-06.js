// Função para incluir palavra dentro de uma frase
const stringFixed = (string) => `Tryber ${string} aqui!`

console.log(stringFixed('Bebeto'));

// Array com escopo global de cinco skills desenvolvidas
const arraySkills = ['Git', 'GitHub', 'HTML', 'CSS', 'JavaScript'];

// Função para concatenar a função 1 com o array ordenado acima
let concatenate = (function1, array) => `${function1} Minhas cinco principais habilidades são: ${array.sort()} #goTrybe`

console.log(concatenate(stringFixed('Bebeto'), arraySkills));