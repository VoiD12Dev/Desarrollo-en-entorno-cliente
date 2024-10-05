/*
1.1 ELEMENTOS ÚNICOS
Escribe una función llamada uniques que acepte un número variable de argumentos y devuelva un
array que contenga todos los argumentos pero eliminando los repetidos.
Por ejemplo:
uniques(2, 4, 'patata', [1,2], [1, 2], 'patata', 4) => [2, 4, 'patata', [1,2], [1,2])
Ten en cuenta que [1,2] y [1,2] son dos arrays diferentes, y por tanto no se consideran duplicados
*/

const uniques = (...args) => new Set(args);

console.log(uniques(2, 4, 'patata', [1, 2], [1, 2], 'patata', 2, 4, 'patata', [1, 2], [1, 2]));
