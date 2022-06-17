// /**
//  * Some predefined delay values (in milliseconds).
//  */
// export enum Delays {
//   Short = 500,
//   Medium = 2000,
//   Long = 5000,
// }
//
// /**
//  * Returns a Promise<string> that resolves after a given time.
//  *
//  * @param {string} name - A name.
//  * @param {number=} [delay=Delays.Medium] - A number of milliseconds to delay resolution of the Promise.
//  * @returns {Promise<string>}
//  */
// function delayedHello(
//   name: string,
//   delay: number = Delays.Medium,
// ): Promise<string> {
//   return new Promise((resolve: (value?: string) => void) =>
//     setTimeout(() => resolve(`Hello, ${name}`), delay),
//   );
// }
//
// // Below are examples of using ESLint errors suppression
// // Here it is suppressing a missing return type definition for the greeter function.
//
// // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
// export async function greeter(name: string) {
//   return await delayedHello(name, Delays.Long);
// }

import Alphabet from './Alphabet.js';
import LSymbol from './LSymbol.js';
import Rule from './Rule.js';
import LSystem from './LSystem.js';

// Algae

const A: LSymbol = new LSymbol('A');
const B: LSymbol = new LSymbol('B');

const ruleA: Rule = new Rule(A);
ruleA.rules.push(A);
ruleA.rules.push(B);

const ruleB: Rule = new Rule(B);
ruleB.rules.push(A);

const alphabet: Alphabet = new Alphabet();

alphabet.variables.push(A);
alphabet.variables.push(B);

const lSystem = new LSystem(alphabet, 4);
lSystem.rules.set(ruleA.subject.symbol, ruleA);
lSystem.rules.set(ruleB.subject.symbol, ruleB);

lSystem.iterate();
