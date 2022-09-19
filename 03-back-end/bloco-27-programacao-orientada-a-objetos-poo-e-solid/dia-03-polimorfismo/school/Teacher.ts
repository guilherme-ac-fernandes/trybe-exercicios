import Employee from "./Employee";
import Subject from "./Subject";

class Teacher extends Employee {
  private _subject: Subject;

  constructor(
    name: string,
    birthDate: Date,
    salary: number,
    subject: Subject
  ) {
    super(name, birthDate, salary);
    this._subject = subject;
    this.enrollment = this.generateEnrollment();
  }

  get subject(): Subject {
    return this._subject;
  }

  set subject(newValue: Subject) {
    this._subject = newValue;
  }

  generateEnrollment(): string {
    const randomStr = String(Date.now() * (Math.random() + 1)).replace(/\W/g, '');
    return `PRF${randomStr}`;
  }
}

export default Teacher;
