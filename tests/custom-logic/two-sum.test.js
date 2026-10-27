/**
 * @obsidianId two-sum-20261025202423-kerh
 * @artifactId js-two-sum-v1
 * @testFor two-sum.js
 * @see Obsidian Note: [[Two-Sum]]
 */

import { twoSum } from "../../exercises/custom-logic/two-sum.js";

test("Debe retornar los índices correctos [0, 1]", () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

test("Debe retornar arreglo vacío si no hay solución", () => {
  expect(twoSum([1, 2, 3], 10)).toEqual([]);
});

test("Debe manejar elementos duplicados", () => {
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});

test("Debe manejar números negativos", () => {
  expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
});

test("Debe retornar arreglo vacío con menos de dos elementos", () => {
  expect(twoSum([], 0)).toEqual([]);
  expect(twoSum([1], 1)).toEqual([]);
});
