import Alphabet from './Alphabet.js';
import Rule from './Rule.js';

export default class System {
  private readonly _alphabet: Alphabet;
  private _currentStep: number;
  private readonly _stepLength: number;
  private readonly _rules: Map<string, Rule>;
  private readonly _symbols: Array<string>;

  get symbols(): Array<string> {
    return this._symbols;
  }

  getSymbol(index: number): string
  {
    return this.symbols[index];
  }

  get rules(): Map<string, Rule> {
    return this._rules;
  }

  get stepLength(): number {
    return this._stepLength;
  }

  get currentStep(): number {
    return this._currentStep;
  }

  get alphabet(): Alphabet {
    return this._alphabet;
  }

  setRule(rule: Rule): System {
    this._rules.set(rule.lettersToSymbol(), rule);

    return this;
  }

  constructor(alphabet: Alphabet, stepLength: number) {
    this._alphabet = alphabet;
    this._currentStep = 0;
    this._stepLength = stepLength;
    this._rules = new Map();
    this._symbols = [this._alphabet.getLetterAt().symbol];
  }

  protected processSymbolRule(char: string): string {
    return this._rules.get(char).lettersToSymbol();
  }

  public iterate(): void {
    while (this._currentStep <= this._stepLength) {
      const symbol: string = this._symbols[this._currentStep];
      let buffer = '';

      for (const c of symbol) {
        buffer += this.processSymbolRule(c);
      }

      this._symbols.push(buffer);
      this._currentStep += 1;
    }
  }
}
