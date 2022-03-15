// Criar função greet que cumprimente o usuário pelo nome (defalt params)

const greet = (name, greeting = 'Hi') => `${greeting} ${name}`;

console.log(greet('John')) // 'Hi John'
console.log(greet('John', 'Good morning')) // 'Good morning John'
console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'