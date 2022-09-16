export default class Person {
  constructor(
    private _name: string,
    private _birthDate: Date,
  ){}

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = newValue;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(newValue: Date) {
    this.validateBirthDate(newValue);
    this._birthDate = newValue;
  }

  // Funções de getAge e validateBirthDate provenientes do course da Trybe
  // source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/da4ffbd5-ce7e-4914-8372-20cf2239f72b/lesson/1d568588-ad20-4cfa-b0c1-b246f809f918/solution
  static getAge(newValue: Date): number {
    // diferença em milissegundos entre a data atual e a data passada por parâmetro
    const diff = Math.abs(new Date().getTime() - newValue.getTime());
    // 1 ano = 31536000000 milissegundos
    const yearMs = 31_536_000_000;
    return Math.floor(diff / yearMs);
  }

  private validateBirthDate(newValue: Date): void {
    if (newValue.getTime() > new Date().getTime()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro.');
    }
    if (Person.getAge(newValue) > 120) {
      throw new Error('A pessoa deve ter no máximo 120 anos.');
    }
  }
}

const person1 = new Person('Jon Snow', new Date('1983-05-02'));
const person2 = new Person('Jon Snow', new Date('2000-12-24'));
const person3 = new Person('Jon Snow', new Date('2021-02-21'));

console.log(person1);
console.log(person2);
console.log(person3);
