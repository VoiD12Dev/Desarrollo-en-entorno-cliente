/*
 1.2 Combinación de Arrays
Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como
parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el
primero.
Por ejemplo:
combineArrays([1,2], [3,4]) => [3,4,1,2]
*/

// prettier-ignore
const combineArrays = (array1, array2) => Array.isArray(array1) && Array.isArray(array2) ? [...array1, ...array2] : 'Has introducido datos que no son array';

console.log(combineArrays([1, 2], [3, 4]));
