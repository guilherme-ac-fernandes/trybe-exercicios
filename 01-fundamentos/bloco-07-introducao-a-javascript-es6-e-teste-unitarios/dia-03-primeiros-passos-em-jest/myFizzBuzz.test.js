// As funções que serão submetidas aos testes
const myFizzBuzz = require('./myFizzBuzz.js');

// Primeiro Teste
describe('Primeiro Teste - FizzBuzz', () => {
	it ('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
		expect(myFizzBuzz(15)).toMatch('fizzbuzz');
	});
});

// Segundo Teste
describe('Segundo Teste - FizzBuzz', () => {
	it ('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
		expect('fizz').toMatch(myFizzBuzz(6));
	});
});

// Terceiro Teste
describe('Terceiro Teste - FizzBuzz', () => {
	it ('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
		expect('buzz').toMatch(myFizzBuzz(10));
	});
});

// Quarto Teste
describe('Quarto Teste - FizzBuzz', () => {
	it ('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
		expect(4).toBe(myFizzBuzz(4));
	});
});

// Quinto Teste
describe('Quinto Teste - FizzBuzz', () => {
	it ('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
		expect(false).toBe(myFizzBuzz('4'));
	});
});