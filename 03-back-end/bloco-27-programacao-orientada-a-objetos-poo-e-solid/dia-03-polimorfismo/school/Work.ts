import Evaluation from "./Evaluation";
import Teacher from "./Teacher";
// import Subject from "./Subject";

class Work extends Evaluation {
  constructor(teacher: Teacher, score: number) {
    super(teacher, score);
  }

  set score(newValue: number) {
    if (newValue > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    }
  }
}

export default Work;
