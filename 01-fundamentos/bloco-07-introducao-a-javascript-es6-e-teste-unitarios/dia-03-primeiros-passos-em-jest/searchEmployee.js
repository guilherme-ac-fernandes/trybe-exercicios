// Arquivo com a função que sera submetida aos testes

// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  if (id === '' || id === ' ' || detail === '' || detail === ' ') {
    return 'Colocar informações válidas'
  }
  for (let i = 0; i < professionalBoard.length; i += 1) {
    const positionId = professionalBoard[i].id;
    const positionFirstName = professionalBoard[i].firstName;
    const positionLastName = professionalBoard[i].lastName;
    const positionSpecialities = professionalBoard[i].specialities;
    if (positionId === id) {
      if (positionFirstName === detail) {
        return professionalBoard[i];
      } else if (positionLastName === detail) {
        return professionalBoard[i];
      } else if (JSON.stringify(positionSpecialities) === JSON.stringify(detail)) { 
        // Forma de comparação de dois arrays proveniente do link a seguir
        // source: https://www.30secondsofcode.org/articles/s/javascript-array-comparison 
        return professionalBoard[i];
      } else {
        return 'Informação indisponível';
      } 
    }
  }
  return 'ID não identificada';
};

module.exports = searchEmployee;