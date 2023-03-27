import Letter from './Letter.js';

/**
 * Recursive
 */
export default class Rule {
  private readonly _letter: Letter;
  private readonly _letters: Array<Letter>;

  get letter(): Letter {
    return this._letter;
  }

  get letters(): Array<Letter> {
    return this._letters;
  }

  pushLetter(letter: Letter): Rule {
    this._letters.push(letter);

    return this;
  }

  lettersToSymbol(): string {
    let symbolsAsString = '';

    this._letters.forEach((l) => {
      symbolsAsString += l.symbol;
    });

    return symbolsAsString;
  }

  constructor(subject: Letter) {
    this._letter = subject;
    this._letters = [];
  }
}
