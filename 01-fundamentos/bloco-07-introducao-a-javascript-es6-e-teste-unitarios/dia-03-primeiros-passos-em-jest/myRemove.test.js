// Os teste das funções
const myRemove = require('./myRemove.js')

// Primeiro Teste 
describe('Primeiro Teste - myRemove', () => {
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
		expect([1, 2, 4]).toEqual(myRemove([1, 2, 3, 4], 3));
	});
});

// Segundo Teste 
describe('Segundo Teste - myRemove', () => {
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
		expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
	});
});

// Terceiro Teste 
describe('Terceiro Teste - myRemove', () => {
	it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
		expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
	});
});
