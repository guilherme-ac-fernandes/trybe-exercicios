// Exercício de Fixação - HOF

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function checkAnswers (array1, array2) {
  if (array1.length !== array2.length) {
    return 'Erro: as respostas contém números de questões diferentes';
  }
  let sum = 0;
  const points = {
    right: 1,
    wrong: 0.5,
    empty: 0,
  }
  for (let i = 0; i < array1.length; i += 1) {
    if (array1[i] === array2[i]) sum += points.right;
    if (array1[i] !== array2[i]) {
      if (array2[i] === 'N.A') {
        sum += points.empty;
      } else {
        sum += points.wrong
      }
    }
  }
  return console.log(`Nota do Aluno: ${sum} pontos`);
}

const compareAnsWersHOF = (answersRight, answersStudent, callback) => callback(answersRight, answersStudent);


compareAnsWersHOF(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);