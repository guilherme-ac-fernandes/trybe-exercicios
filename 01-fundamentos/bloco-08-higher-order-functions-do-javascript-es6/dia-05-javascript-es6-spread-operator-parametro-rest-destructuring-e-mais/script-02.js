// Função para somar números (parâmentro rest)
const sum = (...arg) => arg.reduce((arr, curr) => arr + curr, 0);

console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40, 50)); // 150
console.log(sum(-1, -2, -3, -4)); // -10
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 45
console.log(sum(2, 4, 6, 8, 10, 12)); // 42
