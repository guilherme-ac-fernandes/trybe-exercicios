import Student from "./Student";
import Teacher from "./Teacher";
import Subject from "./Subject";
import Exam from "./Exam";
import Work from "./Work";
import EvaluationResult from "./EvaluationResult";

const carolina = new Student('Carolina da Silva', new Date('2005/03/17'));
const lucas = new Student('Lucas Peixoto Salgueiro', new Date('2006/07/19'));

const math = new Subject('Matemática');
const history = new Subject('História');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);

const examMath = new Exam(marta, 25);
const workMath = new Work(marta, 50);
const examHistory = new Exam(joao, 25);
const workHistory = new Work(joao, 50);

carolina.addEvaluationsResults(new EvaluationResult(examMath, 23, 'exam'));
carolina.addEvaluationsResults(new EvaluationResult(workMath, 42, 'work'));
carolina.addEvaluationsResults(new EvaluationResult(examHistory, 25, 'exam'));
carolina.addEvaluationsResults(new EvaluationResult(workHistory, 50, 'work'));

console.log('Avaliações: ', carolina.evaluationsResults);
console.log('Soma das notas: ', carolina.getSum());
console.log('Média das notas: ', carolina.getAvg());

lucas.addEvaluationsResults(new EvaluationResult(examMath, 25, 'exam'));
lucas.addEvaluationsResults(new EvaluationResult(workMath, 49, 'work'));
lucas.addEvaluationsResults(new EvaluationResult(examHistory, 20, 'exam'));
lucas.addEvaluationsResults(new EvaluationResult(workHistory, 50, 'work'));

console.log('Avaliações: ', lucas.evaluationsResults);
console.log('Soma das notas: ', lucas.getSum());
console.log('Média das notas: ', lucas.getAvg());