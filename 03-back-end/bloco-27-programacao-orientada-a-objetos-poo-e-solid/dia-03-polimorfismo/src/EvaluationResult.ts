import Evaluation from './Evaluation';

class EvaluationResult {
  constructor(
    private _evaluation: Evaluation,
    private _score: number,
    ) {
    this.evaluation = _evaluation;
    this.score = _score;
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
    if (this.evaluation.type === 'prova' && newValue > 25) {
      throw new Error(`A pontução deve ser menor que 25 pontos.`);
    }
    if (this.evaluation.type === 'trabalho' && newValue > 50) {
      throw new Error(`A pontução deve ser menor que 50 pontos.`);
    }
    this._score = newValue;
  }
}

export default EvaluationResult;
