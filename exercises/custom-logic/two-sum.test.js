import { twoSum } from "./two-sum";

test('Debe retornmar los índices correctos [0, 1]', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
});

// 
test('Debe retornar arreglo vacío si no hay solución', () => {
  expect(twoSum([1, 2, 3], 10)).toEqual([]);
});