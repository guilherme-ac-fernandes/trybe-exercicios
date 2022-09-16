import Person from './Person';
import Employee from './Employee';
import Subject from './Subject';

export default class Teacher extends Person implements Employee {
  private _subject: Subject;
  private _registration = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
    subject: Subject
  ) {
    super(name, birthDate);
    this._subject = subject;
    this.salary = _salary;
    this._admissionDate = new Date();
    this.registration = this.generateRegistration()
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newValue: Subject) {
    this._subject = newValue;
  }

  get salary(): number {
    return this._salary;
  }

  set salary(newValue: number) {
    this._salary = newValue;
  }

  get registration(): string {
    return this._registration;
  }

  set registration(value: string) {
    if (value.length < 16) {
      throw new Error('O registro deve possuir no mínimo 16 caracteres.');
    }
    this._registration = value;
  }

  generateRegistration(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `FNC${randomStr}`;
  }

  get admissionDate(): Date {
    return this._admissionDate;
  }

  set admissionDate(newValue: Date) {
    if (newValue.getTime() > new Date().getTime()) {
      throw new Error('A data de admissão não pode ser uma data no futuro.');
    }
    this._admissionDate = newValue;
  }
}

const math = new Subject('Matemática');
const history = new Subject('História');
const philosophy = new Subject('Filosofia');

const marta = new Teacher('Marta da Silva', new Date('1980/03/30'), 2000, math);
const joao = new Teacher('João Antônio da Costa', new Date('1982/04/21'), 2000, history);
const lucio = new Teacher('Lucio Teixeira', new Date('1986/01/29'), 2000, philosophy);

console.log(marta);
console.log(joao);
console.log(lucio);