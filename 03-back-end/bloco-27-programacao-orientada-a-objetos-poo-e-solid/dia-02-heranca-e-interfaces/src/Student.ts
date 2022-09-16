class Student {
  private _enrollment: string;
  private _name: string;
  private _examsGrades: number[];
  private _worksGrades: number[];

  constructor(enrollment: string, name: string) {
    this._enrollment = enrollment;
    this._name = name;
    this._examsGrades = [];
    this._worksGrades = [];
  }

  get enrollment(): string {
    return this._enrollment;
  }

  set enrollment(value: string) {
    this._enrollment = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres!')
    }
    this._name = value;
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
}

const Gui = new Student('123456', 'Guilherme Fernandes');
const Felipe = new Student('654321', 'Felipe Martins');

console.log(Gui);
console.log(Felipe);

Gui.examsGrades = [25, 20, 23, 23];
Gui.worksGrades = [45, 45];

console.log('Estudante: ', Gui.name)
console.log('Soma de todas as notas: ', Gui.getSum());
console.log('Média de todas as notas: ', Gui.getAvg());