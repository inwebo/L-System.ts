import LSymbol from '../src/LSymbol.js';
import Rule from '../src/Rule.js';
import Alphabet from '../src/Alphabet.js';
import LSystem from '../src/LSystem.js';

describe('L-System : Algae', () => {
  // Symbols
  const A = new LSymbol('A');
  const B = new LSymbol('B');

  // Rules
  const ruleA = new Rule(A);

  ruleA.push(A).push(B);

  const ruleB = new Rule(B);
  ruleB.push(A);

  // Alphabet
  const alphabet = new Alphabet();

  alphabet.pushVariable(A).pushVariable(B);

  // LSystem
  const lSystem = new LSystem(alphabet, 4);
  lSystem
    .setRule(ruleA.subject.symbol, ruleA)
    .setRule(ruleB.subject.symbol, ruleB);

  it('LSymbols', () => {
    expect(A.symbol).toBe('A');
    expect(B.symbol).toBe('B');

    expect(() => new LSymbol('AA')).toThrowError();
  });

  it('Rules', () => {
    expect(ruleA.rules.length).toBe(2);
    expect(ruleA.toString()).toBe('AB');

    expect(ruleB.toString()).toBe('A');
  });

  it('Alphabet', () => {
    expect(alphabet.variables.length).toBe(2);
    expect(alphabet.getAxiom(0)).toBe(A);
    expect(alphabet.getAxiom(1)).toBe(B);

    expect(() => alphabet.getAxiom(2)).toThrowError();
    expect(alphabet.constants.length).toBe(0);
  });

  it('LSystem', () => {
    expect(lSystem.n).toBe(0);
    lSystem.iterate();
    expect(lSystem.n).toBe(5);
    expect(lSystem.steps).toBe(4);

    expect(lSystem.values[0]).toBe('A');
    expect(lSystem.values[1]).toBe('AB');
    expect(lSystem.values[2]).toBe('ABA');
    expect(lSystem.values[3]).toBe('ABAAB');
    expect(lSystem.values[4]).toBe('ABAABABA');
    expect(lSystem.values[5]).toBe('ABAABABAABAAB');

    expect(lSystem.alphabet).toBe(alphabet);

    expect(lSystem.rules.size).toBe(2);
  });
});
