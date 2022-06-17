import LSymbol from './LSymbol.js';

export default class Rule {
  private readonly _subject: LSymbol;
  private readonly _rule: Array<LSymbol>;

  get subject(): LSymbol {
    return this._subject;
  }

  get rule(): Array<LSymbol> {
    return this._rule;
  }

  toString(): string {
    let buffer = '';

    this._rule.forEach((l) => {
      buffer += l.symbol;
    });

    return buffer;
  }

  constructor(subject: LSymbol) {
    this._subject = subject;
    this._rule = [];
  }
}
