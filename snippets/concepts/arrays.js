/**
 * @obsidianId arrays-20261027122918-neva
 * @artifactId js-arrays-v1
 * @title Arrays
 * @type concept-example
 * @see Obsidian Note: [[Arrays]]
 * @description Ejemplo básico de creación, transformación y reducción de arrays.
 */

const numbers = [1, 2, 3];

const doubled = numbers.map((number) => number * 2);
const total = numbers.reduce((sum, number) => sum + number, 0);

console.log({ numbers, doubled, total });
