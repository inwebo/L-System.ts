import Letter from '../src/Letter.js';
import Rule from '../src/Rule.js';
import Alphabet from '../src/Alphabet.js';
import System from '../src/System.js';

describe('L-System : Algae', () => {
  const letterA = new Letter('A');
  const letterB = new Letter('B');

  const alphabet = new Alphabet();
  alphabet
    .pushLetter(letterA)
    .pushLetter(letterB);

  // A => AB
  const ruleA = new Rule(letterA);
  ruleA
    .pushLetter(letterA)
    .pushLetter(letterB);

  // B => A
  const ruleB = new Rule(letterB);
  ruleB.pushLetter(letterA);

  const system = new System(alphabet, 4);
  system
    .setRule(ruleA)
    .setRule(ruleB);

  it('Symbols', () => {
    expect(letterA.symbol).toBe('A');

    expect(letterB.symbol).toBe('B');

    expect(() => new Letter('AA')).toThrowError();
  });

  it('Rules', () => {
    expect(ruleA.letters.length).toBe(2);
    expect(ruleA.lettersToSymbol()).toBe('AB');

    expect(ruleB.lettersToSymbol()).toBe('A');
  });

  it('Alphabet', () => {
    expect(alphabet.letters.length).toBe(2);
    expect(alphabet.getFirst()).toBe(letterA);
    expect(alphabet.getLetterAt(1)).toBe(letterB);

    expect(() => alphabet.getLetterAt(2)).toThrowError();
    expect(alphabet.constants.length).toBe(0);
  });
  ("-")
  it('System', () => {
    expect(system.currentStep).toBe(0);
    system.iterate();
    expect(system.currentStep).toBe(5);
    expect(system.stepLength).toBe(4);

    expect(system.symbols[0]).toBe('A');
    expect(system.symbols[1]).toBe('AB');
    expect(system.symbols[2]).toBe('ABA');
    expect(system.symbols[3]).toBe('ABAAB');
    expect(system.symbols[4]).toBe('ABAABABA');
    expect(system.symbols[5]).toBe('ABAABABAABAAB');

    expect(system.alphabet).toBe(alphabet);

    expect(system.rules.size).toBe(2);
  });
});
