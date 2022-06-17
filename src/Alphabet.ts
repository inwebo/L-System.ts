import LSymbol from './LSymbol.js';

export default class Alphabet {
  private readonly _variables: Array<LSymbol>;
  private readonly _constants: Array<LSymbol>;

  get variables(): Array<LSymbol> {
    return this._variables;
  }

  pushVariable(lSymbol: LSymbol): Alphabet {
    this._variables.push(lSymbol);

    return this;
  }

  pushConstant(lSymbol: LSymbol): Alphabet {
    this._constants.push(lSymbol);

    return this;
  }

  get constants(): Array<LSymbol> {
    return this._constants;
  }

  public getAxiom(index = 0): LSymbol {
    if (this._variables.at(index) === undefined) {
      const message = `Variables array at index {$index} is not set`;
      throw new Error(message);
    } else {
      return this._variables.at(index);
    }
  }

  constructor() {
    this._variables = [];
    this._constants = [];
  }
}
