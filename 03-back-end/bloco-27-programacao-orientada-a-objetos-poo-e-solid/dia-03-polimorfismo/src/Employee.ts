import Person from "./Person";

interface Enrollable {
  enrollment: string;
  generateEnrollment(): string;
}


class Employee extends Person implements Enrollable {
  private _enrollment = String();
  private _admissionDate: Date;

  constructor(
    name: string,
    birthDate: Date,
    private _salary: number,
  ) {
    super(name, birthDate);
    this.salary = _salary;
    this._admissionDate = new Date();
    this.enrollment = this.generateEnrollment()
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

  get salary(): number {
    return this._salary;
  }

  set salary(newValue: number) {
    if (newValue < 0) {
      throw new Error('O salário não pode ser negativo.');
    }
    this._salary = newValue;
  }

  generateEnrollment(): string {
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

export default Employee;
