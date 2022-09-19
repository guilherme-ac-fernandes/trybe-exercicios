export default class Subject {
  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set name(newValue: string) {
    if (newValue.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.');
    }
    this._name = newValue;
  }
}
