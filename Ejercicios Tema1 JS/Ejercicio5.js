/*
5.EJERCICIO 5: LA MODA
Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez
construida dicha matriz, el programa debe calcular cual es la moda.
Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código:
Math.floor(Math.random() * 10);
Puedes consultar cómo se calcula la moda en este
enlace:https://www.disfrutalasmatematicas.com/datos/moda.html
Un ejemplo de ejecución del programa sería:
[ 1, 2, 4, 5, 4 ,4 ,4 ,4 ,4 ,4 ,0 ,7, 8, 4 ,9, 7, 3, 3, 1, 0]
Moda: 4

*/

function moda(array) {
  let max = 0;
  let numeroModa = 0;

  for (let i = 0; i < array.length; i++) {
    let array1 = array.filter(x => x === array[i]);
    if (max < array1.length) {
      max = array1.length;
      numeroModa = array[i];
    }
  }

  return `El numero de moda es el ${numeroModa} con ${max} repeticiones`;
}

let arrayModa = [1, 2, 4, 5, 4, 4, 4, 4, 4, 4, 0, 7, 8, 4, 9, 7, 3, 3, 1, 0];

console.log(moda(arrayModa));
