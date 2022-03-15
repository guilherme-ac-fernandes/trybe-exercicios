// Função para somar números (parâmentro rest)
const sum = (...arg) => arg.reduce((arr, curr) => arr + curr, 0);

console.log('Soma de 1, 2, 3 = ', sum(1, 2, 3)); // 6
console.log('-------------------------------------------------');
console.log('Soma de 10, 20, 30, 40, 50 = ', sum(10, 20, 30, 40, 50)); // 150
console.log('-------------------------------------------------');
console.log('Soma de -1, -2, -3, -4 = ', sum(-1, -2, -3, -4)); // -10
console.log('-------------------------------------------------');
console.log('Soma de 1, 2, 3, 4, 5, 6, 7 = ', sum(1, 2, 3, 4, 5, 6, 7)); // 28
console.log('-------------------------------------------------');
console.log('Soma de 2, 4, 6, 8, 10, 12 = ', sum(2, 4, 6, 8, 10, 12)); // 42
