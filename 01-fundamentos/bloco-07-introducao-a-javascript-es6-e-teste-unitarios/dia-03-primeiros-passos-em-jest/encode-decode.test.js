// As funções que serão submetidas aos testes
const {encode, decode} = require('./encode-decode');

describe('Teste Encode/Decode', () => {
	// Primeiro Teste
	// // Utilização do .toBeDefined e typeof de uma função proveniente do course da Trybe
	// // source: https://app.betrybe.com/course/fundamentals/introducao-a-javascript-es6-e-testes-unitarios/primeiros-passos-no-jest-gabaritos/solutions/218ad9d8-6b7a-47c9-8761-3952ef89e5f0/conteudos/4b4da4b0-7e00-4230-97e7-04d0dbcdc3eb?use_case=calendar
	it('Teste se encode está definida', () => {
		expect(encode('hi')).toBeDefined();
	});
	it('Teste se encode é uma função', () => {
		expect(typeof encode).toBe('function');
	});
	it('Teste se decode está definida', () => {
		expect(decode('h3')).toBeDefined();
	});
	it('Teste se decode é uma função', () => {
		expect(typeof encode).toBe('function');
	});

	// Segundo Teste
	it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
		expect(encode('aeiou')).toMatch('12345')
	});

	
});
