export default abstract class Person {
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

  static getAge(newValue: Date): number {
    const diff = Math.abs(new Date().getTime() - newValue.getTime());
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
