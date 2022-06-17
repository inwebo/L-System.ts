import Alphabet from './Alphabet.js';
import Rule from './Rule.js';

export default class LSystem {
  private readonly _alphabet: Alphabet;
  private _n: number;
  private readonly _steps: number;
  private readonly _rules: Map<string, Rule>;
  private readonly _values: Array<string>;

  get values(): Array<string> {
    return this._values;
  }

  get rules(): Map<string, Rule> {
    return this._rules;
  }

  get steps(): number {
    return this._steps;
  }

  get n(): number {
    return this._n;
  }

  get alphabet(): Alphabet {
    return this._alphabet;
  }

  setRule(key: string, value: Rule): LSystem {
    this._rules.set(key, value);

    return this;
  }

  constructor(alphabet: Alphabet, steps: number) {
    this._alphabet = alphabet;
    this._steps = steps;
    this._n = 0;
    this._rules = new Map();
    this._values = [this._alphabet.getAxiom().symbol];
  }

  protected process(char: string): string {
    return this._rules.get(char).toString();
  }

  public iterate(): void {
    while (this._n <= this._steps) {
      const value: string = this._values[this._n];
      let buffer = '';

      for (const c of value) {
        buffer += this.process(c);
      }

      this._values.push(buffer);
      this._n += 1;
    }
  }
}
