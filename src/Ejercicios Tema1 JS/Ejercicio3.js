/*
3.EJERCICIO 3: DÍA DE LA SEMANA
El 1 de enero de 2021 fue viernes.
Prepara un programa que, dado un día y un mes (de 2021) calcule qué día de la semana es.
Por ejemplo, si el programa tiene de entrada:
const dia = 10
const mes = 1
debería imprimir “Domingo”.
No puedes utilizar ninguna función predefinManises, 46940, Valenciaida de manejo de fechas de JavaScript (puedes hacerlo
calculando cuántas semanas y días han pasado desde el 1 de enero, por ejemplo)
 */

function dayMonth(day, month) {
  const totalDays = (month - 1) * 30 + day;
  console.log(totalDays);
  let weekday = totalDays - totalDays / 7;
  return weekday;
}

const days = 10;
const months = 1;
console.log(dayMonth(days, months));
