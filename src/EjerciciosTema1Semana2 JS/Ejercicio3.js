/*
1.3 Suma de números
Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de
cualquier tipo) y devuelva la suma de los argumentos numéricos.
Por ejemplo:
sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }) => 5
*/

const sumNumbers = (...args) => args.reduce((acc, cur) => (isNaN(cur) ? acc : acc + cur), 0);

console.log(sumNumbers('hola', 2, 3, [10, 20, 30], { value: 300 }));
