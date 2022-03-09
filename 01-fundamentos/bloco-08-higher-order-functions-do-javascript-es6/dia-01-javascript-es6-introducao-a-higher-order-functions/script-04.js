// Exercício de Fixação - HOF

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

// Função para avaliar combinação de números
function checkAnswers (value1, value2) {
  const points = {
    right: 1,
    wrong: -0.5,
    empty: 0,
  }
  let result = 0;
  if (value1 === value2) return points.right;
  if (value1 !== value2) {
    if (value2 === 'N.A') return points.empty;
    return points.wrong
  }
}

// Função para atribuir comparação aos arrays
const compareAnsWersHOF = (answersRight, answersStudent, callback) => {
  if (answersRight.length !== answersStudent.length) {
    return 'Erro: as respostas contém números de questões diferentes';
  }
  let sum = 0;
  for (let i = 0; i < answersRight.length; i++) {
    sum += callback(answersRight[i], answersStudent[i]);
  }
  return console.log(`Nota do Aluno: ${sum} pontos`);
} 

compareAnsWersHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);
