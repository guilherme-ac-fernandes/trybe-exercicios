import Person from './Person';

export default class Student extends Person {
  private _enrollment = String();
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate)
    this._enrollment = this.generateEnrollment();
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

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length < 4) {
      throw new Error('A pessoa estudante só pode possuir 4 notas de provas!')
    }
    this._examsGrades = value;
  }

  get worksGrades(): number[] {
    return this._worksGrades;
  }

  set worksGrades(value: number[]) {
    if (value.length < 2) {
      throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos!')
    }
    this._worksGrades = value;
  }

  getSum() {
    const allGrades = [...this._examsGrades, ...this._worksGrades];
    const sumGrades = allGrades.reduce((acc, curr) => {
      acc += curr;
      return acc;
    }, 0);
    return sumGrades;
  }

  getAvg() {
    const allGrades = [...this._examsGrades, ...this._worksGrades];
    const sumGrades = this.getSum();
    return Math.round(sumGrades/allGrades.length);
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `STU${randomStr}`;
  }
}

// const Gui = new Student('Guilherme Fernandes', new Date('1994-08-28'));
// console.log(Gui);
// Gui.examsGrades = [25, 20, 23, 23];
// Gui.worksGrades = [45, 45];
// console.log('Estudante: ', Gui.name)
// console.log('Soma de todas as notas: ', Gui.getSum());
// console.log('Média de todas as notas: ', Gui.getAvg());