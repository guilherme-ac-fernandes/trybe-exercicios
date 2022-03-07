// A função será submetida aos testes em seguida
const techList = require('./techList');

describe('Teste techList', () => {
	// Primeiro Teste
	it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });

	// Segundo Teste
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });

	// Terceiro Teste
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

	// Quarto Teste
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
