import LSymbol from "./LSymbol.js";

export default class Alphabet {

  private readonly _variables: Array<LSymbol>;
  private readonly _constants: Array<LSymbol>;

  get variables(): Array<LSymbol> {
    return this._variables;
  }

  get constants(): Array<LSymbol> {
    return this._constants;
  }

  public getAxiom(index = 0): LSymbol {
    if(this._variables.length > 0) {
      return this._variables.at(index);
    } else {
      throw new Error(`Variables are not set`);
    }
  }

  constructor() {
    this._variables = [];
    this._constants = [];
  }
}
