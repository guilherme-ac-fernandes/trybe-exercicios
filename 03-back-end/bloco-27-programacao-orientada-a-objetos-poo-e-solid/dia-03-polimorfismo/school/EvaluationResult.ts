import Evaluation from './Evaluation';


class EvaluationResult {
  constructor(
    private _evaluation: Evaluation,
    private _score: number,
    public type: 'exam' | 'work',
    ) {
    this.evaluation = _evaluation;
    this.score = _score;
    this.type = type;
  }

  get evaluation(): Evaluation {
    return this._evaluation;
  }

  set evaluation(newValue: Evaluation) {
    this._evaluation = newValue;
  }

  get score(): number {
    return this._score;
  }

  set score(newValue: number) {
    if (newValue < 0) {
      throw new Error('A pontução deve ser positiva.');
    }
    if (this.type === 'exam' && newValue > 25) {
      throw new Error(`A pontução deve ser menor que 25 pontos.`);
    }
    if (this.type === 'work' && newValue > 50) {
      throw new Error(`A pontução deve ser menor que 50 pontos.`);
    }
    this._score = newValue;
  }
}

export default EvaluationResult;
