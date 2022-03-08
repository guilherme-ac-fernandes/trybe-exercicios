// A função será submetida aos testes em seguida
const searchEmployee = require('./searchEmployee');

describe('Teste Search for Employee', () => {
  // Primeiro Teste - Existência
	it('Function exist', () => {
		expect(typeof searchEmployee).toBe('function');
	});
	
	// Segundo Teste - Caso Desejado
	it('From id and detail, inform about employee', () => {
		expect(searchEmployee('1256-4', 'Bezos')).toMatchObject({
			id: '1256-4',
			firstName: 'Linda',
			lastName: 'Bezos',
			specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
		});
	});

	// Segundo Teste - Caso Desejado
	it('From id and detail, inform about employee', () => {
		expect(searchEmployee('4456-4', 'Leila')).toEqual({
			id: '4456-4',
			firstName: 'Leila',
			lastName: 'Zuckerberg',
			specialities: ['Context API', 'RTL', 'Bootstrap'],
		});
	});

	// Terceiro Teste - Não consta essa identificação 
	it('Id doesn`t exist', () => {
		expect(searchEmployee('46-2', 'Paul')).toMatch('ID não identificada');
	});

	// Quarto Teste - Informações fornecidas não existe
	it('informations don`t exist', () => {
		expect(searchEmployee('9852-2-2', 'Gaga')).toMatch('Informação indisponível');
	});

	// Quinto Teste - Informações válidas
	it('informations don`t exist', () => {
		expect(searchEmployee('', ' ')).toMatch('Colocar informações válidas');
	})
});
