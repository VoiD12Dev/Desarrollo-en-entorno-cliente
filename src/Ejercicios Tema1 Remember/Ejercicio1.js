/* 1. EJERCICIO 1
Dada una serie de números, dividirla en dos series diferentes: una con los números más grandes y
otra con los números más pequeños.
Por ejemplo:
Serie: 1, 5 ,8,40, 100, -3, 2.5, 3000
Salida
-------
Pequeños: -3, 1, 2.5, 5
Grandes: 8, 40, 100, 3000
Puedes representar la serie como una constante, no hace falta que el programa lea los datos. No
importa el orden en el que estén los números en las dos series que construyas. */

function dividedNumbers(array) {
  array = array.sort((a, b) => a - b);
  const primeraParte = array.length / 2;
  const primerArray = array.slice(0, primeraParte);
  const segundoArray = array.slice(primeraParte, array.length);

  console.log(array);
  console.log(`Array menores [${primerArray}] \nArray mayores [${segundoArray}]`);
}

let numeros = [1, 5, 8, 40, 100, -3, 2.5, 3000];

dividedNumbers(numeros);
