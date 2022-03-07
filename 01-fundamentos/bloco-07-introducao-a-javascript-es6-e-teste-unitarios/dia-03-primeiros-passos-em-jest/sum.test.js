// Arquivos com os testes
const sum = require('./sum');

// Primeiro Teste
describe('Primeiro Teste', () => {
	it('Teste se o retorno de sum(4, 5) é 9', () => {
		expect(sum(4, 5)).toBe(9);
	});
});

// Segundo Teste
describe('Segundo teste', () => {
	it('Teste se o retorno de sum(0, 0) é 0', () => {
		expect(sum(0, 0)).toBe(0);
	});
});

// Terceiro Teste 
describe('Terceiro Teste', () => {
	it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
		expect(() => {sum(4, "5")}).toThrow();
	});
});

// Quarto Teste
describe('Quarto Teste', () => {
	it('Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")', () => {
		expect(() => {sum(4, "5").toThrowError(new Error ('parameters must be numbers'))});
	});
});