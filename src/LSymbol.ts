export default class LSymbol {
  private readonly _symbol: string;

  get symbol(): string {
    return this._symbol;
  }

  constructor(symbol: string) {
    if (symbol.length === 1) {
      this._symbol = symbol;
    } else {
      const message = `The symbol input must be a string with 1 char : input was {$this.symbol}`;
      throw new Error(message);
    }
  }
}
