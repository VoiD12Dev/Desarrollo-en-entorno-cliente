/*
2.EJERCICIO 2: BUENOS DÍAS
Construye un programa de Inteligencia Artificial que salude correctamente según la hora del día.
De 7 a 12 dirá “Buenos días”, de 12 a 20 “Buenas tardes”, de 20 a 2 “Buenas noches” y de 2 a 7 de
la mañana “¿Qué haces despierto a estas horas?”
Por ejemplo, en el siguiente caso:
const hora = 15
El programa diría “Buenas tardes”
 */

function dayHour(hour) {
  if (hour >= 7 && hour <= 12) {
    console.log('Good morning! 😁');
  }
  if (hour > 12 && hour < 20) {
    console.log('Good evening! 😎');
  }
  if (hour <= 2 || hour >= 20) {
    console.log('Good night 😴');
  }
  if (hour > 2 && hour < 7) {
    console.log('The roads are not laid yet! 🤦‍♂️');
  }
}

dayHour(3);
