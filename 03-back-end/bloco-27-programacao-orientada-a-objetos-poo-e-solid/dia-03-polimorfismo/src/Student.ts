import Person from "./Person";
import EvaluationResult from "./EvaluationResult";

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}


class Student extends Person implements Enrollable {
  private _enrollment = String();
  private _evaluationsResults: EvaluationResult[];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
    this._evaluationsResults = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    if (value.length < 16) {
      throw new Error('A matrícula deve possuir no mínimo 16 caracteres.');
    }
    this._enrollment = value;
  }

  get evaluationsResults(): EvaluationResult[] {
    return this._evaluationsResults;
  }

  getSum() {
    const sumGrades = this.evaluationsResults.reduce((acc, curr) => {
      acc += curr.score;
      return acc;
    }, 0);
    return sumGrades;
  }

  getAvg() {
    const sumGrades = this.getSum();
    return Math.round(sumGrades/this.evaluationsResults.length);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }

  addEvaluationsResults(newValue: EvaluationResult): void {
    this._evaluationsResults.push(newValue);
  }
}

export default Student;
