import LSymbol from './LSymbol.js';

export default class Rule {
  private readonly _subject: LSymbol;
  private readonly _rules: Array<LSymbol>;

  get subject(): LSymbol {
    return this._subject;
  }

  get rules(): Array<LSymbol> {
    return this._rules;
  }

  push(lSymbol: LSymbol): Rule {
    this._rules.push(lSymbol);

    return this;
  }

  toString(): string {
    let buffer = '';

    this._rules.forEach((l) => {
      buffer += l.symbol;
    });

    return buffer;
  }

  constructor(subject: LSymbol) {
    this._subject = subject;
    this._rules = [];
  }
}
