// As funções serão submetidas aos testes em seguida
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
		expect(encode('aeiou')).toMatch('12345');
	});

	// Terceiro Teste
	it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u , respectivamente', () => {
		expect(decode('12345')).toMatch('aeiou');
	});

	// Quarto Teste - encode
	it('Encode - Teste se as demais letras/números não são convertidos para cada caso', () => {
		expect(encode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz');
	});
	
	// Quarto Teste - decode
	it('Decode - Teste se as demais letras/números não são convertidos para cada caso', () => {
		expect(decode('bcdfghjklmnpqrstvwxyz')).toMatch('bcdfghjklmnpqrstvwxyz');
	});

	// Quinto Teste - Encode
	it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
		expect(encode('hello').length).toBe(5);
	});

	// Quinto Teste - Decode
	it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
		expect(decode('h2ll4').length).toBe(5);
	});
});
