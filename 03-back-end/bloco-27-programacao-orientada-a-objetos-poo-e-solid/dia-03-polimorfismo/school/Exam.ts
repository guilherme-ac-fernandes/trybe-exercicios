import Evaluation from "./Evaluation";
import Teacher from "./Teacher";
// import Subject from "./Subject";

// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/b47be335-efa2-446d-9bce-4116cd59238c/lesson/6b70dbcd-830d-4505-a6a9-05db6769f71e/solution
class Exam extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(newValue: number) {
    if (newValue > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }
  }
}

export default Exam;

// const math = new Subject('Matemática');
// const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
// const exam = new Exam(marta, 15);
// console.log(exam);
