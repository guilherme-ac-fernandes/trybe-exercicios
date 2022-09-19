// Resolução proveniente do gabarito presente no course da Trybe
// source: https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/62c97d81-c729-445d-9e9f-f636a5c24231/day/b47be335-efa2-446d-9bce-4116cd59238c/lesson/6b70dbcd-830d-4505-a6a9-05db6769f71e/solution
import Teacher from './Teacher';

class Evaluation {
  constructor(
    private _teacher: Teacher,
    private _score: number,
    private _type: string,
    ) {
    this._teacher = _teacher;
    this.type = _type;
    this.score = _score;
  }

  get teacher(): Teacher {
    return this._teacher;
  }

  set teacher(newValue: Teacher) {
    this._teacher = newValue;
  }

  get score(): number {
    return this._score;
  }

  set score(newValue: number) {
    if (newValue < 0) throw new Error('A pontução deve ser positiva.');

    if (this.type === 'prova' && newValue > 25) {
      throw new Error('A pontução deve ser menor que 25 pontos.');
    }

    if (this.type === 'trabalho' && newValue > 50) {
      throw new Error('A pontução deve ser menor que 50 pontos.');
    }

    this._score = newValue;
  }

  get type(): string {
    return this._type;
  }

  set type(newValue: string) {
    if (!['prova', 'trabalho'].includes(newValue)) {
      throw new Error('O tipo de avaliação não é válido.');
    }

    this._type = newValue;
  }
}

export default Evaluation;
