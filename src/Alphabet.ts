import Letter from './Letter.js';

export default class Alphabet {
  private readonly _letters: Array<Letter>;
  private readonly _constants: Array<Letter>;

  get letters(): Array<Letter> {
    return this._letters;
  }

  pushLetter(lSymbol: Letter): Alphabet {
    this._letters.push(lSymbol);

    return this;
  }

  get constants(): Array<Letter> {
    return this._constants;
  }

  public getFirst(): Letter {
    return this.getLetterAt(0);
  }

  public getLetterAt(index = 0): Letter {
    if (this._letters.at(index) === undefined) {
      const message = `Variables array at index {$index} is not set`;
      throw new Error(message);
    } else {
      return this._letters.at(index);
    }
  }

  constructor() {
    this._letters = [];
    this._constants = [];
  }
}
